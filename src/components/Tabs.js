import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../views/Dashboard';
import NewRecord from '../views/NewRecord';
import Settings from '../views/Settings'

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: 15,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 85,
                height: 85,
                borderRadius: 50,
                backgroundColor: '#59C9A5'
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
)

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: [{ 
                    backgroundColor: '#74226C',
                    positon: 'absolute',
                    bottom: 40,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    borderRadius: 20,
                    height: 65,
                    ...styles.shadow
                }],
            }}
        >
            <Tab.Screen name="Dashboard" component={Dashboard}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
                            <Image
                                source={require('../../assets/dashboard.png')}
                                resizeMode='contain'
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? '#59C9A5' : '#fff',
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="NewRecord" component={NewRecord}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            // source={require('../../assets/jumping-rope.png')}
                            // source={require('../../assets/jump-rope.png')}
                            source={require('../../assets/skip-rope.png')}
                            resizeMode='contain'
                            style={{
                                width: 55,
                                height: 55,
                                tintColor: '#fff'
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton { ...props } />
                    )
                }}
            />
            <Tab.Screen name="Settings" component={Settings} showLabel='false'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
                            <Image
                                source={require('../../assets/settings.png')}
                                resizeMode='contain'
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? '#59C9A5' : '#fff',
                                }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#4B2142',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
});
