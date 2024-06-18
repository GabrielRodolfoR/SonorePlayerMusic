import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Playlist() {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.PlaylistBanner}>
                <Text>Favoritos</Text>
                <Text style={styles.audioCount}>0 Músicas</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Adiconando playlist")} style={styles.container}>
                <Text style={styles.PlaylistBtn}>+ Adicionar nova Playlist</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    PlaylistBanner: {
        padding: 5,
        backgroundColor: "#D0D1D3",
        borderRadius: 5,
    },
    audioCount: {
        marginTop: 2,
        opacity: 0.5,
        fontSize: 14,
    },

    PlaylistBtn: {
        color: "#febc2a",
        letterSpacing: 1,
        fontWeight: "bold",
        fontSize: 14,
    },
});
