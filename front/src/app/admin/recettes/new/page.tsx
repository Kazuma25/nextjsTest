"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import Form from 'next/form'
import { createRecetteAction } from "./recettes.action";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);

    const createRecette = async (FormData: FormData) => {
        setIsLoading(true);
        const json = await createRecetteAction({
            nom: String(FormData.get("nom")),
            ingredients: String(FormData.get("ingredients")),
            description: String(FormData.get("description")),
            tempsPreparation: String(FormData.get("tempPreparation")),
        });
        setIsLoading(false);

        if(json.error){
            alert("une erreur est survenue => " + json.error);
        }
    }

  return (
        <div className="shadow-2xs rounded-sm w-100 h-auto bg-gray-100 m-7 p-5 border-black border-1">
            <h1 className="mb-4 text-center">Ajout de nouvelle recettes</h1>
            <Form 
                action={async (FormData)=> {
                    createRecette(FormData);
            }}>
                <Label>
                    nom :
                    <Input name="nom"/>
                </Label>
                <Label>
                    ingrdiens :
                    <Input name="ingredients"/>
                </Label>
                <Label>
                    descrption :
                    <Input name="description"/>
                </Label>
                <Label>
                    temps de préparation :
                    <Input name="tempPreparation"/>
                </Label>
                <Button type="submit" disabled={isLoading} className="m-3"> {isLoading ? "laoding..." : "submit"}</Button>
            </Form>
        </div>
    );  
}

