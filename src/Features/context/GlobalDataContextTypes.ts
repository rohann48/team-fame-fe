export interface GlobalDataContextTypes {
  aboutUsData: {
    content: string | null;
  };
  setAboutUsData: React.Dispatch<React.SetStateAction<{}>>;
}
