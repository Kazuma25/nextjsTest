import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page(props: {
  params: Promise<{
    citationId: string;
  }>;
  searchParams: Promise<Record<string,string | string[]>>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  return (
        <div className="">
          <Card>
            <CardHeader>
                <CardTitle>Recette</CardTitle>
                <p>{JSON.stringify(params, null, 2)}</p>
                <p>{JSON.stringify(searchParams, null, 2)}</p>
            </CardHeader>
          </Card>
        </div>
    );  
  }