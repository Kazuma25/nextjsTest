import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default async function Page() {
  // await new Promise(r => setTimeout(r, 1000 )); // Verifie la page de laoding

  // throw new Error("Invalid Path"); // Pour tester la pages d'erreur
  return (
        <div className="">
          <Card className="w-50">
            <CardHeader>
                <CardTitle>/admin</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Link href="/admin/recettes/1" className={buttonVariants({size: "lg", variant:"outline" })}>Recette 1</Link>
              <Link href="/admin/recettes/2" className={buttonVariants({size: "lg", variant:"outline" })}>Recette 2</Link>
              <Link href="/admin/recettes/3" className={buttonVariants({size: "lg", variant:"outline" })}>Recette 3</Link>
              <Link href="/admin/recettes/4" className={buttonVariants({size: "lg", variant:"outline" })}>Recette 4</Link>
            </CardContent>
            <Link href="/admin/recettes/new" className={buttonVariants({size: "lg", variant:"outline" })}>ajouter une recettes</Link>
          </Card>
        </div>
    );  
  }