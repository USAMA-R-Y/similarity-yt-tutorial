"use client";

import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import SimpleBar from "simplebar-react";

// components
import Code from "@/components/Code";
import { nodejs, python } from "@/helpers/documentation-code";

// files
import "simplebar-react/dist/simplebar.min.css"; // add scrollbars

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      {/* content */}
      <TabsContent value="nodejs">
        {/* simplebar is used to add scroll bars on x and y axis */}
        <SimpleBar>
          <Code
            language="javascript"
            code={nodejs}
            animated={true}
            show={true}
          />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          <Code language="python" code={python} animated={true} show={true} />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
