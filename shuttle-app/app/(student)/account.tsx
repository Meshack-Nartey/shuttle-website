// app/(student)/account.tsx (Main Profile/Account Screen)

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, COMMON_STYLES } from '../constants/Styles';
import Header from '../../components/Header';

// --- MOCK DATA ---
const MOCK_USER = {
    name: 'John Doe',
    username: 'johndoe12',
    email: 'john.doe@st.knust.edu.gh',
    school: 'KNUST',
    profilePic: 'https://via.placeholder.com/150/0000FF/808080?text=JD', // Mock profile pic
};

// --- Sub-Component: Settings Item ---
interface SettingsItemProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    onPress: () => void;
    isDestructive?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ icon, title, onPress, isDestructive = false }) => (
    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
        <Ionicons name={icon} size={24} color={isDestructive ? '#FF6347' : COLORS.primary} style={{ width: 30 }} />
        <Text style={[styles.settingsTitle, isDestructive && { color: '#FF6347' }]}>{title}</Text>
        <Ionicons name="chevron-forward" size={20} color={COLORS.text} />
    </TouchableOpacity>
);

// --- Main Screen Component ---
const AccountScreen = () => {
    const router = useRouter();

    const handleLogout = () => {
        Alert.alert(
            "Log Out",
            "Are you sure you want to log out?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Log Out", style: "destructive", onPress: () => router.replace('/(student)/login') }
            ]
        );
    };

    return (
        <View style={COMMON_STYLES.container}>
            <Header title="My Account" showBack={true} />
            
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                {/* Profile Summary Card */}
                <View style={styles.profileCard}>
                    <Image source={{ uri: MOCK_USER.profilePic }} style={styles.profileImage} />
                    <Text style={styles.profileName}>{MOCK_USER.name}</Text>
                    <Text style={styles.profileDetail}>@{MOCK_USER.username}</Text>
                    <Text style={styles.profileDetail}>{MOCK_USER.email}</Text>
                    <Text style={styles.profileSchool}>{MOCK_USER.school}</Text>
                </View>

                {/* Account Settings Section */}
                <Text style={styles.sectionHeader}>Account</Text>
                <View style={styles.settingsGroup}>
                    <SettingsItem 
                        icon="person-circle-outline" 
                        title="Personal Information" 
                        onPress={() => router.push('/(student)/account/personal-info')} 
                    />
                    <SettingsItem 
                        icon="lock-closed-outline" 
                        title="Privacy" 
                        onPress={() => router.push('/(student)/account/privacy')} 
                    />
                    <SettingsItem 
                        icon="notifications-outline" 
                        title="Notifications" 
                        onPress={() => router.push('/(student)/account/notifications')} 
                    />
                </View>

                {/* Support & Logout Section */}
                <Text style={styles.sectionHeader}>Other</Text>
                <View style={styles.settingsGroup}>
                    <SettingsItem 
                        icon="help-circle-outline" 
                        title="Help & Support" 
                        onPress={() => Alert.alert("Support", "Contact support@shuttlesmart.com")} 
                    />
                    <SettingsItem 
                        icon="log-out-outline" 
                        title="Log Out" 
                        onPress={handleLogout} 
                        isDestructive 
                    />
                </View>
                
                <View style={{ height: 40 }} />
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(student)/home-search')}>
                    <Ionicons name="home-outline" size={24} color={COLORS.text} />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => router.push('/(student)/activity')}>
                    <Ionicons name="time-outline" size={24} color={COLORS.text} />
                    <Text style={styles.navText}>Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="person" size={24} color={COLORS.primary} />
                    <Text style={[styles.navText, { color: COLORS.primary }]}>Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 100,
    },
    // --- Profile Card ---
    profileCard: {
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: COLORS.primary,
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    profileDetail: {
        fontSize: 16,
        color: COLORS.text,
        marginTop: 2,
    },
    profileSchool: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.text,
        marginTop: 8,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
    },
    // --- Settings Group ---
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.text,
        marginTop: 20,
        marginBottom: 10,
    },
    settingsGroup: {
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
        overflow: 'hidden',
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    settingsTitle: {
        flex: 1,
        fontSize: 16,
        color: COLORS.text,
        marginLeft: 15,
    },
    // --- Bottom Nav (Copied) ---
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 70,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
    navItem: {
        alignItems: 'center',
        padding: 5,
    },
    navText: {
        fontSize: 12,
        marginTop: 2,
        color: COLORS.text,
    },
});

export default AccountScreen;