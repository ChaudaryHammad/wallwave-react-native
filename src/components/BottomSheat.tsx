import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export const DownloadPicture = ({ onClose }: { onClose: () => void }) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables: snapPoints define the heights the BottomSheet can snap to
  const snapPoints = useMemo(() => ["90%"], []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        onClose={onClose}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.handleIndicator}
        enablePanDownToClose={true}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  handleIndicator: {
    height: 0,
  },
});
