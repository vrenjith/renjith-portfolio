import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { experiences } from '@/data/experiences';
import { projects } from '@/data/projects';
import { blogs } from '@/data/blogs';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    color: '#2a2a2a',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#4a4a4a',
    lineHeight: 1.4,
  },
  tag: {
    fontSize: 10,
    color: '#6366f1',
    marginRight: 5,
    marginBottom: 3,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 15,
    borderBottom: '1 solid #eaeaea',
    paddingBottom: 10,
  },
});

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Professional Summary</Text>
        <Text style={styles.text}>
          Over 24 years of experience in application development, cloud architecture and DevOps transformation.
          Specializing in building high-performance teams and implementing enterprise-scale solutions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Experience</Text>
        {experiences.map((exp, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.subtitle}>{exp.title}</Text>
            <Text style={styles.text}>{exp.company} - {exp.period}</Text>
            <Text style={styles.text}>{exp.location}</Text>
            <Text style={styles.text}>{exp.description}</Text>
            <View style={styles.tagsContainer}>
              {exp.technologies.map((tech, techIndex) => (
                <Text key={techIndex} style={styles.tag}>{tech}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Projects</Text>
        {projects.map((project, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.subtitle}>{project.title}</Text>
            <Text style={styles.text}>{project.description}</Text>
            <View style={styles.tagsContainer}>
              {project.tags.map((tag, tagIndex) => (
                <Text key={tagIndex} style={styles.tag}>{tag}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Blog Posts</Text>
        {blogs.map((blog, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.subtitle}>{blog.title}</Text>
            <Text style={styles.text}>{blog.date} - {blog.readTime}</Text>
            <Text style={styles.text}>{blog.description}</Text>
            <View style={styles.tagsContainer}>
              {blog.tags.map((tag, tagIndex) => (
                <Text key={tagIndex} style={styles.tag}>{tag}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export const PDFGenerator = () => (
  <PDFDownloadLink document={<PDFDocument />} fileName="portfolio.pdf">
    {({ loading }) => (
      <Button variant="outline" disabled={loading}>
        <FileDown className="w-4 h-4 mr-2" />
        {loading ? "Generating PDF..." : "Download PDF"}
      </Button>
    )}
  </PDFDownloadLink>
);