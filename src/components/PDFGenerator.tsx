import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image, usePDF, Font } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { experiences, profileData } from '@/data/experiences';
import { projects } from '@/data/projects';
import Html from 'react-pdf-html';

// Use built-in fonts to avoid font resolution errors

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 30,
        borderBottom: '2 solid #4DB6AC',
        paddingBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
    headerContent: {
        flex: 1,
    },
    name: {
        fontSize: 28,
        color: '#1A1F2C',
        fontFamily: 'Helvetica-Bold',
        marginBottom: 5,
    },
    contact: {
        fontSize: 12,
        color: '#4DB6AC',
        marginBottom: 3,
        fontFamily: 'Helvetica',
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    contactIcon: {
        fontSize: 10,
        color: '#4DB6AC',
        marginRight: 8,
        fontFamily: 'Helvetica-Bold',
        width: 20,
    },
    contactInfo: {
        fontSize: 11,
        color: '#4A4A4A',
        fontFamily: 'Helvetica',
        flex: 1,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 20,
        color: '#4DB6AC',
        marginBottom: 15,
        fontFamily: 'Helvetica-Bold',
        borderBottom: '1 solid #E5DEFF',
        paddingBottom: 5,
    },
    itemTitle: {
        fontSize: 16,
        color: '#1A1F2C',
        marginBottom: 5,
        fontFamily: 'Helvetica-Bold',
    },
    h1: {
        fontSize: 16,
        color: '#1A1F2C',
        fontFamily: 'Helvetica-Bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#4DB6AC',
        marginBottom: 5,
        fontFamily: 'Helvetica',
    },
    h2: {
        fontSize: 14,
        color: '#4DB6AC',
        fontFamily: 'Helvetica-Bold',
        marginBottom: 5,
    },
    h3: {
        fontSize: 13,
        color: '#4DB6AC',
        marginBottom: 3,
        fontFamily: 'Helvetica',
    },
    text: {
        fontSize: 12,
        color: '#4A4A4A',
        lineHeight: 1.5,
        marginBottom: 8,
        fontFamily: 'Helvetica',
    },
    div: {
        fontSize: 12,
        color: '#4A4A4A',
        lineHeight: 1,
        fontFamily: 'Helvetica',
        marginBottom: 2,
    },
    ul: {
        fontSize: 12,
        color: '#4A4A4A',
        lineHeight: 1.5,
        marginBottom: 5,
        fontFamily: 'Helvetica',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
        gap: 5,
    },
    tag: {
        fontSize: 10,
        backgroundColor: '#E5DEFF',
        color: '#4DB6AC',
        padding: '4 8',
        borderRadius: 4,
        fontFamily: 'Helvetica',
    },
    detailSection: {
        marginLeft: 15,
        marginTop: 10,
        paddingLeft: 10,
        borderLeft: '1 solid #E5DEFF',
    },
    p: {
        fontSize: 12,
        color: '#4A4A4A',
        lineHeight: 1.5,
        marginBottom: 5,
        fontFamily: 'Helvetica',
    }
});

const PDFDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Image
                    src="/placeholder.svg"
                    style={styles.profileImage}
                />
                <View style={styles.headerContent}>
                    <Text style={styles.name}>{profileData.name}</Text>
                    <Text style={styles.contact}>{profileData.email}</Text>
                    <Text style={styles.contact}>{profileData.title}</Text>
                    <Text style={styles.contact}>{profileData.location}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={styles.text}>
                    {profileData.summary}
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                {experiences.map((exp, index) => (
                    <View key={index} style={[styles.section, { marginBottom: 20 }]}>
                        <Text style={styles.itemTitle}>{exp.title}</Text>
                        <Text style={styles.subtitle}>{exp.company} - {exp.period}</Text>
                        <Text style={styles.text}>{exp.location}</Text>
                        <Text style={styles.text}>{exp.description}</Text>
                        <View style={styles.tagsContainer}>
                            {exp.technologies.map((tech, techIndex) => (
                                <Text key={techIndex} style={styles.tag}>{tech}</Text>
                            ))}
                        </View>
                        {exp.positions && (
                            <View style={styles.detailSection}>
                                {exp.positions.map((position, posIndex) => (
                                    <View key={posIndex} style={{ marginBottom: 10 }}>
                                        <Text style={styles.subtitle}>{position.title} - {position.period}</Text>
                                        {position.highlights.map((highlight, hIndex) => (
                                            <Text key={hIndex} style={styles.text}>• {highlight}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projects</Text>
                {projects.map((project, index) => (
                    <View key={index} style={[styles.section, { marginBottom: 20 }]}>
                        <Text style={styles.itemTitle}>{project.title}</Text>
                        <Text style={styles.text}>{project.description}</Text>
                        <View style={styles.tagsContainer}>
                            {project.tags.map((tag, tagIndex) => (
                                <Text key={tagIndex} style={styles.tag}>{tag}</Text>
                            ))}
                        </View>

                        {project.content && (
                            <View style={styles.detailSection}>
                                <Html stylesheet={styles}>{project.content}</Html>
                            </View>
                        )}
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Blog Posts</Text>
                <Text style={styles.text}>
                    Visit my blog "Random Revelations" for technical insights and discoveries from my journey in software development.
                </Text>
                <Text style={styles.text}>
                    Blog URL: https://renjithpillai.com
                </Text>
            </View>
        </Page>
    </Document>
);

export const PDFGenerator = () => {
    // this returns {loading,blob,url,error}
    const [pdf] = usePDF({
        document: <PDFDocument />,  // pass your document
    });

    return (
        <PDFDownloadLink document={<PDFDocument />} fileName="renjith.pdf">
            <Button
                variant="outline"
                disabled={pdf.loading}
                className="bg-accent/10 hover:bg-accent/20"
            >
                <FileDown className="w-4 h-4 mr-2" />
                {pdf.loading ? "Generating PDF..." : "Download PDF"}
            </Button>
        </PDFDownloadLink>
    );
};