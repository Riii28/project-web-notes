import { AnimationProvider } from "./animation-provider.jsx"
import { HeaderProvider } from "./header-provider.jsx"
import { NotesProvider } from "./notes-provider.jsx"
import { ProfileProvider } from "./profile-provider.jsx"
import { NavbarProvider } from "./navbar-provider.jsx"
import { ThemeProvider } from "./theme-provider.jsx"


export const AppProviders = ({ children }) => {
    return (
        <ThemeProvider>
            <AnimationProvider>
                <HeaderProvider>
                    <NotesProvider>
                        <ProfileProvider>
                            <NavbarProvider>
                                { children }
                            </NavbarProvider>
                        </ProfileProvider>
                    </NotesProvider>
                </HeaderProvider>
            </AnimationProvider>
        </ThemeProvider>
    )
}