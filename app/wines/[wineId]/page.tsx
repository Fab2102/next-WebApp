import * as React from "react"
import { notFound } from "next/navigation"
import { NutrientTable } from "@/components/nutrient-table"
import { wines } from "@/lib/wines"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default async function WinePage({ params }: { params: Promise<{ wineId: string }> }) {
  const { wineId } = await params
  const wine = wines.find((w) => w.id === wineId)

  if (!wine) {
    notFound()
  }

  return (
    <>
      <header className="sticky top-0 flex h-14 lg:h-[60px] items-center gap-2 border-b bg-background px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="h-6" />
        <div className="flex items-center gap-2 flex-1">
          <h1 className="font-semibold">{wine.name}</h1>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 space-y-6 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Zutaten</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {wine.ingredients.split("E 220 (Sulfite)").map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="font-bold text-foreground">E 220 (Sulfite)</span>}
                </React.Fragment>
              ))}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nährwertangaben</CardTitle>
          </CardHeader>
          <CardContent>
            <NutrientTable wine={wine} />
          </CardContent>
        </Card>
      </main>
    </>
  )
}

