import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // width: 200,
    // height: 56,
    paddingVertical: 22,
    paddingHorizontal: 26,
    backgroundColor: "#29292e",
    position: "absolute",
    bottom: 32,
    alignSelf: "center",
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  value: {
    color: "#C4C4C4",
  },

  tracker: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#505059",
  },

  progress: {
    height: "100%",
    backgroundColor: "#8257e5",
  },
});
