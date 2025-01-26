import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Wine } from "@/lib/wines"

const NUTRIENT_LABELS: Record<string, string> = {
  brennwert: "Brennwert",
  fett: "Fett",
  gesaettigteFettsaeuren: "davon gesättigte Fettsäuren",
  kohlenhydrate: "Kohlenhydrate",
  zucker: "davon Zucker",
  eiweiss: "Eiweiß",
  salz: "Salz",
}

const FIXED_VALUES: Record<string, string> = {
  fett: "< 0,5 g",
  gesaettigteFettsaeuren: "< 0,1 g",
  eiweiss: "< 0,5 g",
  salz: "< 0,01 g",
}

function formatValue(nutrient: string, value: number | { kj: number; kcal: number }): string {
  if (nutrient === "brennwert") {
    const brennwert = value as { kj: number; kcal: number }
    return `${brennwert.kj} kJ / ${brennwert.kcal} kcal`
  }

  if (nutrient in FIXED_VALUES) {
    return FIXED_VALUES[nutrient]
  }

  return `${value} g`
}

export function NutrientTable({ wine }: { wine: Wine }) {
  const nutrients = Object.entries(wine.nutrients)

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[70%]">Komponente</TableHead>
          <TableHead className="text-right">Menge je 100 ml</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {nutrients.map(([nutrient, value]) => (
          <TableRow key={nutrient}>
            <TableCell className={`font-medium ${NUTRIENT_LABELS[nutrient].startsWith("davon") ? "pl-6" : ""}`}>
              {NUTRIENT_LABELS[nutrient]}
            </TableCell>
            <TableCell className="text-right">{formatValue(nutrient, value)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

