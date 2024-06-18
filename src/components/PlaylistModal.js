import React from "react";
import { View, StyleSheet, Modal, Dimensions, TextInput, TouchableWithoutFeedback, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function PlaylistModal({ visible, onClose }) {
    if (!visible) return null; // Renderiza null se o modal não estiver visível

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={Styles.modalContainer}>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={Styles.modalBg}></View>
                </TouchableWithoutFeedback>
                <View style={Styles.modalContent}>
                <Text style={Styles.text}>Criar Nova Playlist</Text>
                    <View style={Styles.inputContainer}>
                        <TextInput style={Styles.input} />
                        <View style={Styles.submitContainer}>
                            <Entypo name="check" size={30} color="green" />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const { width, height } = Dimensions.get("window");

const Styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: "#ffffff", // cor de fundo do modal
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    inputContainer: {
        width: width - 40,
        borderRadius: 40,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "100%",
        borderBottomWidth: 2,
        borderBottomColor: "#febc2a",
        fontSize: 18,
        paddingVertical: 8,
    },
    submitContainer: {
        marginTop: 15,
        padding: 10,
        backgroundColor: "#fffff",
        borderRadius: 50,
    },
    modalBg: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    text: {
        color: "orange",
        fontStyle: "bold",
        fontSize: 20,
    },
});
''