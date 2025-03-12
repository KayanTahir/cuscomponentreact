import React from "react";

const AppShell = ({ children }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Header Content</h1>
      </div>

      <div style={styles.main}>
        <div style={styles.sidebar}>
          <p>Sidebar Content</p>
        </div>

        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    height: "60px",
    backgroundColor: "#f5f5f5",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  main: {
    display: "flex",
    flex: 1,
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },
  content: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },
};

export default AppShell;
