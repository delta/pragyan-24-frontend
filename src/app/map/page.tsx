'use client';
import { NavBar } from '@/components';
import styles from './map.module.css';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import mainEvents from '@/assets/images/MapMainEvents.png';
import mainBrain from '@/assets/images/mapBrain.png';
import mainFood from '@/assets/images/mapFood.png';
import mainSports from '@/assets/images/mapSports.png';
import mapHome from '@/assets/images/mapHome.png';

const Map = () => {
    const offline = '/assets/tiles/{z}/{x}/{y}.png';
    const northEast = L.latLng(81.012, -152.56);
    const southWest = L.latLng(-82.14, 153.22);
    const bounds = L.latLngBounds(southWest, northEast);

    return (
        <div className={'h-screen w-screen p-0 flex justify-center '}>
            <div className="absolute top-0 w-full max-sm:p-3 p-5">
                <NavBar />
            </div>

            <div style={{ textAlign: 'center' }}>
                <motion.div>
                    <p
                        className={
                            styles.title + ' font-ROG lg:text-7xl md:text-4xl sm:text-5xl text-3xl'
                        }
                    >
                        MAP
                    </p>
                </motion.div>
            </div>
            <div className={styles.legend}>
                <div className={styles.legendTitle}>LEGEND</div>
                <div className={styles.legendItem}>
                    <Image src={mainEvents} alt="mainEvents" /> MAIN EVENTS
                </div>
                <div className={styles.legendItem}>
                    <Image src={mainFood} alt="mainFood" /> FOOD
                </div>
                <div className={styles.legendItem}>
                    <Image src={mainSports} alt="mainEvents" /> SPORTS FACILITIES
                </div>
                <div className={styles.legendItem}>
                    <Image src={mapHome} alt="mainEvents" /> LODGING
                </div>
                <div className={styles.legendItem}>
                    <Image src={mainBrain} alt="mainEvents" /> EDUCATIONAL BUILDING
                </div>
            </div>

            <div className={styles.legendMobile}>
                <div>
                    <div className={styles.legendItemMobile}>
                        <Image src={mainEvents} alt="mainEvents" /> MAIN EVENTS
                    </div>
                    <div className={styles.legendItemMobile}>
                        <Image src={mainFood} alt="mainFood" /> FOOD
                    </div>
                    <div className={styles.legendItemMobile}>
                        <Image src={mainSports} alt="mainEvents" /> SPORTS FACILITIES
                    </div>
                </div>
                <div>
                    <div className={styles.legendItemMobile}>
                        <Image src={mapHome} alt="mainEvents" /> LODGING
                    </div>
                    <div className={styles.legendItemMobile}>
                        <Image src={mainBrain} alt="mainEvents" /> EDUCATIONAL BUILDING
                    </div>
                </div>
            </div>
            <MapContainer
                center={[0, 0]}
                zoom={1}
                scrollWheelZoom={true}
                className={styles.leafletcontainer}
                zoomControl={false}
                maxBoundsViscosity={1}
                attributionControl={false}
                maxBounds={bounds}
            >
                <TileLayer url={offline} noWrap={true} maxZoom={4} minZoom={2} />
            </MapContainer>
        </div>
    );
};

export default Map;
