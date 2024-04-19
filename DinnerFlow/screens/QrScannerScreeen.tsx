import { Text, View } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { useState } from "react";

function QrScannerScreen(): React.JSX.Element {
    const [data, setData] = useState(''); 
  
    return (
        <QRCodeScanner
        onRead={({data}) => setData(data)}
        reactivate = {true}
        reactivateTimeout={500}
        topContent={
            <Text>{data}</Text>
        }>

        </QRCodeScanner>
    );
  }

  export default QrScannerScreen;