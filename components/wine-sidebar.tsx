"use client"

import * as React from "react"
import { GlassWater, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { wines } from "@/lib/wines"

function formatWineName(name: string) {
  if (name.includes("Ried")) {
    return {
      mainText: name.split("Ried")[0].trim(),
      subText: `Ried ${name.split("Ried")[1].trim()}`,
    }
  }
  if (name.includes("Sand & Schotter")) {
    return {
      mainText: name.split("Sand & Schotter")[0].trim(),
      subText: "Sand & Schotter",
    }
  }
  if (name.includes("Alte Rebe")) {
    return {
      mainText: name.split("Alte Rebe")[0].trim(),
      subText: "Alte Rebe",
    }
  }
  // Add handling for Zweigelt variants
  if (name.startsWith("Zweigelt")) {
    const [main, variant] = name.split(" ")
    return {
      mainText: main,
      subText: variant,
    }
  }
  return {
    mainText: name,
    subText: "",
  }
}

export function WineSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()

  const redWines = wines.filter((wine) => wine.category === "Red Wine").filter((wine) => !wine.name.endsWith("Liter"))
  const whiteWines = wines.filter((wine) => wine.category === "White Wine").filter((wine) => !wine.name.endsWith("Liter"))

  const handleWineClick = (wineId: string) => {
    router.push(`/wines/${wineId}`)
    setOpenMobile(false) // Close mobile menu after selection
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          {/* Top Menu Item */}
          <SidebarMenuItem className="flex items-center justify-between gap-2 py-1">
            <SidebarMenuButton size="lg" asChild className="flex-1">
              <Link href="/" onClick={() => setOpenMobile(false)}>
                {/* Icon container */}
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  {/* Option 1 (Glass): */}
                  <GlassWater className="size-4" />
                  {/* Option 2 (Bottle): <Wine className="size-4" /> */}
                </div>

                {/* Text container with slightly looser spacing */}
                <div className="flex flex-col leading-snug gap-[2px]">
                  <span className="font-semibold">Nährwertdaten</span>
                  <span className="text-[12px] text-gray-500 block">Übersicht</span>
                </div>
              </Link>
            </SidebarMenuButton>

            {/* Close button (mobile) */}
            <button
              onClick={() => setOpenMobile(false)}
              className="block md:hidden p-2 hover:bg-accent rounded-md"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Schließen</span>
            </button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* White Wines Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Weißweine</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="ml-2 border-l border-border/80 pl-3">
              {whiteWines.map((wine) => {
                const { mainText, subText } = formatWineName(wine.name)

                return (
                  <SidebarMenuItem
                    key={wine.id}
                    className="py-1 [&:not(:last-child)]:mb-1"
                  >
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === `/wines/${wine.id}`}
                      onClick={() => handleWineClick(wine.id)}
                      className="mr-4 rounded-md transition-all hover:bg-sidebar-accent data-[active=true]:bg-sidebar-accent max-w-[200px] px-2"
                    >
                      <button>
                        <div className="flex flex-col items-start w-full leading-snug">
                          <span className="font-medium">{mainText}</span>
                          {subText && (
                            <span className="text-[11px] text-muted-foreground/70 font-normal leading-tight">
                              {subText}
                            </span>
                          )}
                        </div>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Red Wines Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Rotweine</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="ml-2 border-l border-border/80 pl-3">
              {redWines.map((wine) => {
                const { mainText, subText } = formatWineName(wine.name)

                return (
                  <SidebarMenuItem
                    key={wine.id}
                    className="py-1 [&:not(:last-child)]:mb-1"
                  >
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === `/wines/${wine.id}`}
                      onClick={() => handleWineClick(wine.id)}
                      className="mr-4 rounded-md transition-all hover:bg-sidebar-accent data-[active=true]:bg-sidebar-accent max-w-[200px] px-2"
                    >
                      <button>
                        <div className="flex flex-col items-start w-full leading-snug">
                          <span className="font-medium">{mainText}</span>
                          {subText && (
                            <span className="text-[11px] text-muted-foreground/70 font-normal leading-tight">
                              {subText}
                            </span>
                          )}
                        </div>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}

