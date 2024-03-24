import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreaturePage } from "@/pages/CreaturePage";
import { PreviewPage } from "@/pages/PreviewPage";

export const FormBuilder = () => {
  return (
    <Tabs defaultValue="create" className="flex flex-col h-full">
      <TabsList className="flex rounded-none">
        <TabsTrigger value="create">Creature</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="create" className="flex-1">
        <CreaturePage />
      </TabsContent>
      <TabsContent value="preview" className="flex-1">
        <PreviewPage />
      </TabsContent>
    </Tabs>
  );
};
