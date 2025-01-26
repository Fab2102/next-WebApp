import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 flex h-14 lg:h-[60px] items-center gap-2 border-b bg-background px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="h-6" />
        <div className="flex items-center gap-2 flex-1">
          <h1 className="font-semibold">Home</h1>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        <div className="flex items-center justify-center h-[calc(100vh-60px)] max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Nährwertangaben</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Hier finden Sie alle Nährwerttabellen der Weine des Weingut Bauer Lorenz. Klicken Sie im Menü auf einen der Weine um zu den Daten zu gelangen.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

