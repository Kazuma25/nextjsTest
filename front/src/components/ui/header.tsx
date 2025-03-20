import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "./button";

export function Header() {
    return (
        <div className="">
          <Card>
            <CardHeader>
                <CardTitle>Livre de recettes</CardTitle>
                <Link href="/admin" className={buttonVariants({size: "lg", variant:"outline" })}>/admin</Link>
                <Link href="/" className={buttonVariants({size: "lg", variant:"outline" })}>/</Link>
            </CardHeader>
          </Card>
        </div>
    );  
  }