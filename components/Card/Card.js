import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';

import styles from './Card.style';

const Card = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={{
                    uri: props.product.imgURL,
                    }}
                />
                <Text style={styles.card_title}>{props.product.title}</Text>
                <Text style={styles.card_text}>{props.product.price}</Text>
                {props.product.inStock === true ? (
                    <Text></Text>
                    ) : (
                    <Text style={styles.no_stock}>STOKTA YOK</Text>
                    )}
            </View>
        </View>
    );
};

export default Card;