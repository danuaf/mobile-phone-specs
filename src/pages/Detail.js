// src/pages/Detail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecifications } from '../api';
import { Star, Phone, Battery, Wifi, Camera, Cpu, MemoryStick } from 'lucide-react';

const SpecSection = ({ title, icon: Icon, children }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="flex items-center mb-3">
            <Icon className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="space-y-2">{children}</div>
    </div>
);

const SpecItem = ({ label, value }) => (
    <div className="flex flex-col border-b border-gray-100 py-2 last:border-0">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-base">{value}</span>
    </div>
);

const Detail = () => {
    const { brandName, modelName } = useParams();
    const [specs, setSpecs] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSpecs = async () => {
            const data = await getSpecifications(brandName, modelName);
            setSpecs(data);
            setLoading(false);
        };
        fetchSpecs();
    }, [brandName, modelName]);

    const handleAddFavorite = () => {
        const favorite = {
            brand: brandName,
            model: modelName,
            timestamp: Date.now(),
        };
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!storedFavorites.some(f => f.brand === brandName && f.model === modelName)) {
            localStorage.setItem('favorites', JSON.stringify([...storedFavorites, favorite]));
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-4 pb-20">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-2xl font-bold">{specs?.phoneDetails?.modelValue}</h1>
                        <p className="text-gray-600">{specs?.phoneDetails?.brandValue} · {specs?.phoneDetails?.yearValue}</p>
                    </div>
                    <button
                        onClick={handleAddFavorite}
                        className="p-2 rounded-full hover:bg-gray-100"
                    >
                        <Star className="w-6 h-6 text-yellow-500" />
                    </button>
                </div>
            </div>

            <SpecSection title="Display" icon={Phone}>
                {specs?.gsmDisplayDetails && (
                    <>
                        <SpecItem label="Type" value={specs.gsmDisplayDetails.displayType} />
                        <SpecItem label="Size" value={specs.gsmDisplayDetails.displaySize} />
                        <SpecItem label="Resolution" value={specs.gsmDisplayDetails.displayResolution} />
                        <SpecItem label="Protection" value={specs.gsmDisplayDetails.displayProtection} />
                    </>
                )}
            </SpecSection>

            <SpecSection title="Battery" icon={Battery}>
                {specs?.gsmBatteryDetails && (
                    <>
                        <SpecItem label="Type" value={specs.gsmBatteryDetails.batteryType} />
                        <SpecItem label="Charging" value={specs.gsmBatteryDetails.batteryCharging} />
                    </>
                )}
            </SpecSection>

            <SpecSection title="Camera" icon={Camera}>
                {specs?.gsmMainCameraDetails && (
                    <>
                        <SpecItem label="Main Camera" value={specs.gsmMainCameraDetails.mainCameraQuad} />
                        <SpecItem label="Main Camera Features" value={specs.gsmMainCameraDetails.mainCameraFeatures} />
                        <SpecItem label="Main Camera Video" value={specs.gsmMainCameraDetails.mainCameraVideo} />
                        <SpecItem label="Selfie Camera" value={specs.gsmSelfieCameraDetails.selfieCameraSingle} />
                        <SpecItem label="Selfie Camera Features" value={specs.gsmSelfieCameraDetails.selfieCameraFeatures} />
                        <SpecItem label="Selfie Camera Video" value={specs.gsmSelfieCameraDetails.selfieCameraVideo} />
                    </>
                )}
            </SpecSection>

            <SpecSection title="Connectivity" icon={Wifi}>
                {specs?.gsmMainCameraDetails && (
                    <>
                        <SpecItem label="Network Support" value={specs.gsmNetworkDetails.networkTechnology} />
                        <SpecItem label="Wireless LAN" value={specs.gsmCommunicationsDetails.communicationsWlan} />
                        <SpecItem label="Bluetooth" value={specs.gsmCommunicationsDetails.communicationsBluetooth} />
                        <SpecItem label="Positioning" value={specs.gsmCommunicationsDetails.communicationsPositioning} />
                        <SpecItem label="Radio" value={specs.gsmCommunicationsDetails.communicationsRadio} />
                        <SpecItem label="NFC" value={specs.gsmCommunicationsDetails.communicationsNfc} />
                    </>
                )}
            </SpecSection>

            <SpecSection title="Platform" icon={Cpu}>
                {specs?.gsmPlatformDetails && (
                    <>
                        <SpecItem label="OS" value={specs.gsmPlatformDetails.platformOs} />
                        <SpecItem label="Chipset" value={specs.gsmPlatformDetails.platformChipset} />
                        <SpecItem label="CPU" value={specs.gsmPlatformDetails.platformCpu} />
                        <SpecItem label="GPU" value={specs.gsmPlatformDetails.platformGpu} />
                    </>
                )}
            </SpecSection>

            <SpecSection title="Memory" icon={MemoryStick}>
                {specs?.gsmPlatformDetails && (
                    <>
                        <SpecItem label="Memory Card Slot" value={specs.gsmMemoryDetails.memoryCardSlot} />
                        <SpecItem label="Memory Internal" value={specs.gsmMemoryDetails.memoryInternal} />
                    </>
                )}
            </SpecSection>
        </div>
    );
};

export default Detail;