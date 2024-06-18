import React from "react";
import { View, StyleSheet, Modal } from "react-native";

export default function PlaylistModal({ modalVisible }) {
    return (
        <Modal visible={modalVisible} animationType="fade" transparent>
            <View style={Styles}>
                <View>

                </View>
            </View>
        </Modal>
    )
}

const Styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer:{
        width: width-20,
        height: 200,
        borderRadius: 10,
        backgroundColor: "#ffffff",
    }
})