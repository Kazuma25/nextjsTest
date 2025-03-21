"use server"

import { prisma } from "@/lib/prisma"
import { error } from "console";
import { redirect } from "next/navigation";

export async function createRecetteAction ( recette: {
    nom: string,
    ingredients: string,
    description: string,
    tempsPreparation: string,
}) {
    if(recette.nom != "" && recette.ingredients != "" && recette.description != "" && recette.tempsPreparation != ""){
        const newRecette = await prisma.recette.create({
            data:{
                nom: recette.nom,
                ingredients: recette.ingredients,
                description: recette.description,
                tempsPreparation: recette.tempsPreparation,
            }
        });
        redirect("/admin"); 
    }
    else return{
        error: "Erreur un ou plusieurs champs sont vide"
    }
    
}