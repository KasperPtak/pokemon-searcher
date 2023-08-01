"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes";
// Alias som "nextthemeprovider" for at undgå forvirring ved at have det samme navn flere gange
 import { ThemeProviderProps, type ThemeProviderProps } from "next-themes/dist/types";

// spread operateren "...props" tager alle properties der bliver lagt på komponenten fx <ThemeProvider me="cool" /> her er ...props lig med me="cool"
// children refererer til alt der ligger inde i <NextThemeProvider> <NextThemeProvider/> hvilket i det her tilfælde er hele appen
 export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider  {...props} > {children} </NextThemesProvider>
 }