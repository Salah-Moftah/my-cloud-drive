import "./globals.css";
import { SidePanelProvider } from "@/contexts/SidePanelContext";
import { SearchBarProvider } from "@/contexts/SearchBarContext";
import { GetFilesProvider } from "@/contexts/GetFilesContext";
import { ViewModeProvider } from "@/contexts/ViewModeContext";
import { DropdownProvider } from "@/contexts/DropdownMenuContext";
import { DropdownMenu } from "@/components";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "My Drive - Google Drive",
  description: "My cloud drive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-roboto`}>
        <DropdownProvider>
          <SearchBarProvider>
            <GetFilesProvider>
              <ViewModeProvider>
                <SidePanelProvider>
                  {children}
                  <DropdownMenu />
                  <Toaster position="bottom-left" />
                </SidePanelProvider>
              </ViewModeProvider>
            </GetFilesProvider>
          </SearchBarProvider>
        </DropdownProvider>
      </body>
    </html>
  );
}
