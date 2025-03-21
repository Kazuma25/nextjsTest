
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        ok: true,
        env: process.env.NODE_ENV,
    });
};

export async function POST(request: NextRequest){
    const json = await request.json();

    await new Promise(r => setTimeout(r, 1000));

    const newRecette = await prisma.recette.create({
        data:{
            nom: json.nom,
            ingredients: json.ingredients,
            description: json.description,
            tempsPreparation: json.tempPreparation,
        }
    })

    return NextResponse.json({
        recette: newRecette,
    })
};
