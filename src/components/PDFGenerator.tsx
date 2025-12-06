import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image, usePDF, Font, pdf } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FileDown, ChevronDown } from 'lucide-react';
import { experiences, profileData } from '@/data/experiences';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import Html from 'react-pdf-html';

// Register Open Sans font family with reliable TTF sources
Font.register({
    family: 'Open Sans',
    fonts: [
        {
            src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
            fontWeight: 'normal',
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf',
            fontWeight: 'bold',
        },
    ],
});

// Note: Using Open Sans for all variants to ensure reliable font loading.
// Custom fonts (Inter, Lora, Roboto) have CORS/CDN issues with react-pdf.
// Open Sans is already registered above and works reliably.
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
        minHeight: 120,
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
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    contact: {
        fontSize: 12,
        color: '#4DB6AC',
        marginBottom: 3,
        fontFamily: 'Open Sans',
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    contactIcon: {
        fontSize: 10,
        color: '#4DB6AC',
        marginRight: 8,
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        width: 60,
    },
    contactInfo: {
        fontSize: 11,
        color: '#4A4A4A',
        fontFamily: 'Open Sans',
        flex: 1,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 20,
        color: '#4DB6AC',
        marginBottom: 15,
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        borderBottom: '1 solid #E5DEFF',
        paddingBottom: 5,
    },
    itemTitle: {
        fontSize: 16,
        color: '#1A1F2C',
        marginBottom: 5,
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
    },
    h1: {
        fontSize: 16,
        color: '#1A1F2C',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#4DB6AC',
        marginBottom: 5,
        fontFamily: 'Open Sans',
    },
    h2: {
        fontSize: 14,
        color: '#4DB6AC',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    h3: {
        fontSize: 13,
        color: '#4DB6AC',
        marginBottom: 3,
        fontFamily: 'Open Sans',
    },
    text: {
        fontSize: 12,
        color: '#4A4A4A',
        lineHeight: 1.5,
        marginBottom: 8,
        fontFamily: 'Open Sans',
    },
    div: {
        fontSize: 12,
        color: '#4A4A4A',
        lineHeight: 1,
        fontFamily: 'Open Sans',
        marginBottom: 2,
    },
    ul: {
        fontSize: 12,
        color: '#4A4A4A',
        lineHeight: 1.5,
        marginBottom: 5,
        fontFamily: 'Open Sans',
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
        fontFamily: 'Open Sans',
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
        fontFamily: 'Open Sans',
    }
});

// Additional layout styles for two-column professional variant
const proStyles = StyleSheet.create({
    twoColumn: {
        flexDirection: 'row',
        gap: 12,
    },
    leftColumn: {
        width: '32%',
        paddingRight: 12,
        borderRight: '2 solid #0B3D91'
    },
    rightColumn: {
        width: '68%',
        paddingLeft: 12,
    },
    smallTag: {
        fontSize: 9,
        backgroundColor: '#E8F1FF',
        color: '#0B3D91',
        padding: '2 5',
        borderRadius: 2,
        fontFamily: 'Open Sans',
        marginRight: 3,
        marginBottom: 3,
    },
    skillsGridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    }
});

const PDFDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                {/* Placeholder profile circle (SVGs not supported by react-pdf for images) */}
                <View style={[styles.profileImage, { backgroundColor: '#F0F0F0', alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={{ fontSize: 28, color: '#777', fontFamily: 'Open Sans' }}>{profileData.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</Text>
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>{profileData.name}</Text>
                    <Text style={[styles.contact, { fontSize: 14, marginBottom: 8, fontFamily: 'Open Sans', fontWeight: 'bold' }]}>{profileData.title}</Text>
                    
                    <View style={styles.contactRow}>
                        <Text style={styles.contactIcon}>Email:</Text>
                        <Text style={styles.contactInfo}>{profileData.email}</Text>
                    </View>
                    
                    <View style={styles.contactRow}>
                        <Text style={styles.contactIcon}>Phone:</Text>
                        <Text style={styles.contactInfo}>{profileData.phone}</Text>
                    </View>
                    
                    <View style={styles.contactRow}>
                        <Text style={styles.contactIcon}>LinkedIn:</Text>
                        <Text style={styles.contactInfo}>{profileData.linkedin}</Text>
                    </View>
                    
                    <View style={styles.contactRow}>
                        <Text style={styles.contactIcon}>Location:</Text>
                        <Text style={styles.contactInfo}>{profileData.location}</Text>
                    </View>
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
                        <Text style={styles.text}>
                            Technologies: {exp.technologies.join(', ')}
                        </Text>
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
                        <Text style={styles.text}>
                            Technologies: {project.tags.join(', ')}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Skills Section - detailed */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={{ marginBottom: 8 }}>
                    <Text style={styles.h2}>Cloud</Text>
                    <View style={styles.tagsContainer}>
                        {skills.cloud.map((s, i) => (
                            <Text key={i} style={styles.tag}>{s}</Text>
                        ))}
                    </View>
                </View>

                <View style={{ marginBottom: 8 }}>
                    <Text style={styles.h2}>Technology / Tool Stack</Text>
                    <View style={styles.tagsContainer}>
                        {skills.technologyStack.map((s, i) => (
                            <Text key={i} style={styles.tag}>{s}</Text>
                        ))}
                    </View>
                </View>

                <View style={{ marginBottom: 8 }}>
                    <Text style={styles.h2}>Languages</Text>
                    <View style={styles.tagsContainer}>
                        {skills.languages.map((s, i) => (
                            <Text key={i} style={styles.tag}>{s}</Text>
                        ))}
                    </View>
                </View>

                <View style={{ marginBottom: 8 }}>
                    <Text style={styles.h2}>Databases</Text>
                    <View style={styles.tagsContainer}>
                        {skills.databases.map((s, i) => (
                            <Text key={i} style={styles.tag}>{s}</Text>
                        ))}
                    </View>
                </View>

                <View style={{ marginBottom: 8 }}>
                    <Text style={styles.h2}>Concepts</Text>
                    <View style={styles.tagsContainer}>
                        {skills.concepts.map((s, i) => (
                            <Text key={i} style={styles.tag}>{s}</Text>
                        ))}
                    </View>
                </View>

                <View style={{ marginBottom: 8 }}>
                    <Text style={styles.h2}>Operating Systems</Text>
                    <View style={styles.tagsContainer}>
                        {skills.operatingSystems.map((s, i) => (
                            <Text key={i} style={styles.tag}>{s}</Text>
                        ))}
                    </View>
                </View>

                <View style={{ marginBottom: 8 }}>
                    <Text style={styles.h2}>Dev Environments</Text>
                    <View style={styles.tagsContainer}>
                        {skills.devEnvironments.map((s, i) => (
                            <Text key={i} style={styles.tag}>{s}</Text>
                        ))}
                    </View>
                </View>

                <View style={{ marginBottom: 8 }}>
                    <Text style={styles.h2}>Hardware</Text>
                    <View style={styles.tagsContainer}>
                        {skills.hardware.map((s, i) => (
                            <Text key={i} style={styles.tag}>{s}</Text>
                        ))}
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Blog Posts</Text>
                <Text style={styles.text}>
                    Visit my blog "Random Revelations" for technical insights and discoveries from my journey in software development.
                </Text>
                <Text style={styles.text}>
                    Blog URL: {profileData.blog}
                </Text>
            </View>
        </Page>
    </Document>
);


// Short version - condensed to 1-2 pages
const PDFDocumentShort = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={[styles.header, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                {/* Profile image removed for ATS compatibility */}
                <View style={styles.headerContent}>
                    <Text style={styles.name}>{profileData.name}</Text>
                    <Text style={[styles.contact, { fontSize: 14, marginBottom: 8, fontFamily: 'Open Sans', fontWeight: 'bold' }]}>{profileData.title}</Text>
                    
                    <Text style={styles.contactInfo}>Email: {profileData.email} | Phone: {profileData.phone}</Text>
                    <Text style={styles.contactInfo}>LinkedIn: {profileData.linkedin}</Text>
                    <Text style={styles.contactInfo}>Location: {profileData.location}</Text>
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
                {experiences.slice(0, 2).map((exp, index) => (
                    <View key={index} style={[styles.section, { marginBottom: 15 }]}>
                        <Text style={styles.itemTitle}>{exp.title}</Text>
                        <Text style={styles.subtitle}>{exp.company} - {exp.period}</Text>
                        <Text style={styles.text}>{exp.description}</Text>
                        <Text style={styles.text}>
                            Technologies: {exp.technologies.slice(0, 8).join(', ')}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Key Projects</Text>
                {projects.slice(0, 3).map((project, index) => (
                    <View key={index} style={[styles.section, { marginBottom: 12 }]}>
                        <Text style={styles.itemTitle}>{project.title}</Text>
                        <Text style={styles.text}>{project.description}</Text>
                        <Text style={styles.text}>
                            Technologies: {project.tags.slice(0, 6).join(', ')}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Condensed Skills for short PDF */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills (Condensed)</Text>
                <Text style={styles.h3}>Cloud:</Text>
                <Text style={styles.ul}>{skills.cloud.join(', ')}</Text>

                <Text style={styles.h3}>Tech / Tools:</Text>
                <Text style={styles.ul}>{skills.technologyStack.slice(0, 8).join(', ')}</Text>

                <Text style={styles.h3}>Languages:</Text>
                <Text style={styles.ul}>{skills.languages.slice(0, 6).join(', ')}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact & Links</Text>
                <Text style={styles.text}>
                    Blog: {profileData.blog}
                </Text>
                <Text style={styles.text}>
                    Portfolio: Available upon request for detailed project documentation and case studies.
                </Text>
            </View>
        </Page>
    </Document>
);

// Professional two-column resume
const PDFDocumentProfessional = () => (
    <Document>
        <Page size="A4" style={[styles.page, { fontFamily: 'Open Sans' }]}> 
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={[styles.name, { fontFamily: 'Open Sans' }]}>{profileData.name}</Text>
                    <Text style={[styles.contact, { fontSize: 14, marginBottom: 8, fontFamily: 'Open Sans', fontWeight: 'bold' }]}>{profileData.title}</Text>
                    <Text style={styles.contactInfo}>{profileData.email} | {profileData.phone}</Text>
                    <Text style={styles.contactInfo}>{profileData.linkedin}</Text>
                </View>
            </View>

            <View style={proStyles.twoColumn}>
                <View style={proStyles.leftColumn}>
                    <View style={{ marginBottom: 12 }}>
                        <Text style={[styles.sectionTitle, { fontSize: 14 }]}>Contact</Text>
                        <Text style={[styles.text, { fontSize: 11 }]}>{profileData.location}</Text>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                        <Text style={[styles.sectionTitle, { fontSize: 14 }]}>Tech Stack</Text>
                        <View style={proStyles.skillsGridContainer}>
                            {skills.technologyStack.map((s, i) => (
                                <Text key={i} style={proStyles.smallTag}>{s}</Text>
                            ))}
                        </View>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                        <Text style={[styles.sectionTitle, { fontSize: 14 }]}>Languages</Text>
                        <View style={proStyles.skillsGridContainer}>
                            {skills.languages.map((s, i) => (
                                <Text key={i} style={proStyles.smallTag}>{s}</Text>
                            ))}
                        </View>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                        <Text style={[styles.sectionTitle, { fontSize: 14 }]}>Databases</Text>
                        <View style={proStyles.skillsGridContainer}>
                            {skills.databases.map((s, i) => (
                                <Text key={i} style={proStyles.smallTag}>{s}</Text>
                            ))}
                        </View>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                        <Text style={[styles.sectionTitle, { fontSize: 14 }]}>Cloud</Text>
                        <View style={proStyles.skillsGridContainer}>
                            {skills.cloud.map((s, i) => (
                                <Text key={i} style={proStyles.smallTag}>{s}</Text>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={proStyles.rightColumn}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Professional Summary</Text>
                        <Text style={[styles.text, { fontSize: 11 }]}>{profileData.summary}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Experience</Text>
                        {experiences.map((exp, index) => (
                            <View key={index} style={[styles.section, { marginBottom: 10 }]}> 
                                <Text style={[styles.itemTitle, { fontSize: 12 }]}>{exp.title}</Text>
                                <Text style={[styles.subtitle, { fontSize: 11 }]}>{exp.company} - {exp.period}</Text>
                                <Text style={[styles.text, { fontSize: 10 }]}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

// Elegant single-column resume (with Open Sans)
const PDFDocumentElegant = () => (
    <Document>
        <Page size="A4" style={[styles.page, { fontFamily: 'Open Sans', paddingTop: 35, paddingBottom: 35 }]}> 
            <View style={[styles.header, { marginBottom: 20 }]}>
                <View style={styles.headerContent}>
                    <Text style={[styles.name, { fontFamily: 'Open Sans', fontSize: 26, fontWeight: 'bold' }]}>{profileData.name}</Text>
                    <Text style={[styles.contact, { fontSize: 13, marginBottom: 6, fontFamily: 'Open Sans', fontWeight: 'bold' }]}>{profileData.title}</Text>
                    <Text style={[styles.contactInfo, { fontSize: 10 }]}>{profileData.email} | {profileData.phone} | {profileData.linkedin} | {profileData.location}</Text>
                </View>
            </View>

            <View style={[styles.section, { marginBottom: 16 }]}>
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={[styles.text, { fontFamily: 'Open Sans', fontSize: 11 }]}>{profileData.summary}</Text>
            </View>

            <View style={[styles.section, { marginBottom: 16 }]}>
                <Text style={styles.sectionTitle}>Experience</Text>
                {experiences.slice(0, 3).map((exp, index) => (
                    <View key={index} style={[styles.section, { marginBottom: 10 }]}> 
                        <Text style={[styles.itemTitle, { fontFamily: 'Open Sans', fontSize: 12, fontWeight: 'bold' }]}>{exp.title}</Text>
                        <Text style={[styles.subtitle, { fontSize: 11 }]}>{exp.company} - {exp.period}</Text>
                        <Text style={[styles.text, { fontSize: 10 }]}>{exp.description}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills & Expertise</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                    {['cloud', 'technologyStack', 'languages', 'databases'].map((category) => (
                        <View key={category} style={{ width: '48%' }}>
                            <Text style={[styles.h2, { fontFamily: 'Open Sans', fontSize: 12, fontWeight: 'bold' }]}>
                                {category === 'cloud' && 'Cloud'}
                                {category === 'technologyStack' && 'Tech Stack'}
                                {category === 'languages' && 'Languages'}
                                {category === 'databases' && 'Databases'}
                            </Text>
                            <Text style={[styles.ul, { fontSize: 10 }]}>
                                {(skills[category as keyof typeof skills] as readonly string[]).slice(0, 4).join(', ')}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
);

// ATS friendly minimal resume (with Open Sans)
const PDFDocumentATS = () => (
    <Document>
        <Page size="A4" style={[styles.page, { fontFamily: 'Open Sans', paddingTop: 30, paddingBottom: 30 }]}> 
            <View style={{ marginBottom: 6 }}>
                <Text style={[styles.name, { fontFamily: 'Open Sans', fontSize: 18, marginBottom: 3, fontWeight: 'bold' }]}>{profileData.name}</Text>
                <Text style={[styles.contactInfo, { fontFamily: 'Open Sans', fontSize: 11, marginBottom: 2 }]}>{profileData.title}</Text>
                <Text style={[styles.div, { fontFamily: 'Open Sans', fontSize: 10 }]}>{profileData.email} | {profileData.phone} | {profileData.linkedin}</Text>
            </View>

            <View style={{ marginBottom: 8 }}>
                <Text style={[styles.sectionTitle, { fontSize: 13 }]}>Professional Summary</Text>
                <Text style={[styles.text, { fontSize: 11 }]}>{profileData.summary}</Text>
            </View>

            <View style={{ marginBottom: 8 }}>
                <Text style={[styles.sectionTitle, { fontSize: 13 }]}>Experience</Text>
                {experiences.slice(0, 2).map((exp, index) => (
                    <View key={index} style={{ marginBottom: 6 }}>
                        <Text style={[styles.itemTitle, { fontSize: 11, fontWeight: 'bold' }]}>{exp.title}</Text>
                        <Text style={[styles.div, { fontSize: 10 }]}>{exp.company}, {exp.period}</Text>
                        <Text style={[styles.text, { fontSize: 10 }]}>{exp.description}</Text>
                    </View>
                ))}
            </View>

            <View>
                <Text style={[styles.sectionTitle, { fontSize: 13 }]}>Skills</Text>
                {['cloud', 'technologyStack', 'languages', 'databases', 'concepts'].map((category) => (
                    <View key={category} style={{ marginBottom: 3 }}>
                        <Text style={[styles.div, { fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: 10 }]}>
                            {category === 'cloud' && 'Cloud: '}
                            {category === 'technologyStack' && 'Technology Stack: '}
                            {category === 'languages' && 'Languages: '}
                            {category === 'databases' && 'Databases: '}
                            {category === 'concepts' && 'Concepts: '}
                            {(skills[category as keyof typeof skills] as readonly string[]).slice(0, 6).join(', ')}
                        </Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

export const PDFGenerator = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [pdfBlobs, setPdfBlobs] = React.useState<{
        short: Blob | null;
        detailed: Blob | null;
        professional: Blob | null;
        elegant: Blob | null;
        ats: Blob | null;
    }>({ short: null, detailed: null, professional: null, elegant: null, ats: null });

    // Pre-generate PDFs on component mount
    React.useEffect(() => {
        const generatePDFs = async () => {
            try {
                setIsLoading(true);
                
                // Generate all PDFs concurrently
                const [shortBlob, detailedBlob, professionalBlob, elegantBlob, atsBlob] = await Promise.all([
                    pdf(<PDFDocumentShort />).toBlob(),
                    pdf(<PDFDocument />).toBlob(),
                    pdf(<PDFDocumentProfessional />).toBlob(),
                    pdf(<PDFDocumentElegant />).toBlob(),
                    pdf(<PDFDocumentATS />).toBlob()
                ]);

                setPdfBlobs({ 
                    short: shortBlob, 
                    detailed: detailedBlob,
                    professional: professionalBlob,
                    elegant: elegantBlob,
                    ats: atsBlob
                });
            } catch (error) {
                console.error('Error generating PDFs:', error);
            } finally {
                setIsLoading(false);
            }
        };

        generatePDFs();
    }, []);

    const downloadPDF = (blob: Blob | null, filename: string) => {
        if (!blob) return;
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-2">
            {isLoading && (
                <div className="text-sm text-muted-foreground">
                    Preparing resume files...
                </div>
            )}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        disabled={isLoading}
                        className="bg-accent/10 hover:bg-accent/20"
                    >
                        <FileDown className="w-4 h-4 mr-2" />
                        {isLoading ? "Preparing PDF..." : "Download PDF"}
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem 
                        onClick={() => downloadPDF(pdfBlobs.professional, 'renjith-resume-two-column.pdf')}
                        disabled={!pdfBlobs.professional}
                        className="cursor-pointer"
                    >
                        <FileDown className="w-4 h-4 mr-2" />
                        Two Column
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={() => downloadPDF(pdfBlobs.elegant, 'renjith-resume-single-column.pdf')}
                        disabled={!pdfBlobs.elegant}
                        className="cursor-pointer"
                    >
                        <FileDown className="w-4 h-4 mr-2" />
                        Single Column
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={() => downloadPDF(pdfBlobs.ats, 'renjith-resume-minimalist.pdf')}
                        disabled={!pdfBlobs.ats}
                        className="cursor-pointer"
                    >
                        <FileDown className="w-4 h-4 mr-2" />
                        Minimalist
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled className="text-xs text-gray-400 cursor-default">
                        — Legacy Formats —
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={() => downloadPDF(pdfBlobs.short, 'renjith-resume-classic.pdf')}
                        disabled={!pdfBlobs.short}
                        className="cursor-pointer text-sm"
                    >
                        <FileDown className="w-4 h-4 mr-2" />
                        Classic
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={() => downloadPDF(pdfBlobs.detailed, 'renjith-resume-detailed.pdf')}
                        disabled={!pdfBlobs.detailed}
                        className="cursor-pointer text-sm"
                    >
                        <FileDown className="w-4 h-4 mr-2" />
                        Detailed
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};