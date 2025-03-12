import React from "react";
import AppShell from "./components/Appshell/Appshell";

const App = () => {
  return (
    <AppShell>
      <h2>Main Content</h2>
      <p>
        This is the main content area. You can pass any content as children
        props.
      </p>
    </AppShell>
  );
};

export default App;
