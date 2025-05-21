import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft, Bell, Search, ThumbsUp, Star, MessageCircle } from 'lucide-react-native';

export default function StyleGuideScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}>
            <ArrowLeft size={24} color="#333" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Style Guide</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* Colors */}
        <Section title="Colors">
          <View style={styles.colorGrid}>
            <ColorSwatch name="Primary" color="#5F8D4E" hex="#5F8D4E" />
            <ColorSwatch name="Secondary" color="#285430" hex="#285430" />
            <ColorSwatch name="Accent" color="#A4BE7B" hex="#A4BE7B" />
            <ColorSwatch name="Background" color="#FFFFFF" hex="#FFFFFF" isDark={false} />
            <ColorSwatch name="Surface" color="#F9FAFC" hex="#F9FAFC" isDark={false} />
            <ColorSwatch name="Text" color="#333333" hex="#333333" />
            <ColorSwatch name="Subtle" color="#666666" hex="#666666" />
            <ColorSwatch name="Muted" color="#999999" hex="#999999" />
          </View>
        </Section>

        {/* Typography */}
        <Section title="Typography">
          <Text style={styles.heading1}>Heading 1</Text>
          <Text style={styles.heading2}>Heading 2</Text>
          <Text style={styles.heading3}>Heading 3</Text>
          <Text style={styles.body}>Body Text - Regular paragraph text used throughout the app</Text>
          <Text style={styles.caption}>Caption - Smaller text used for additional information</Text>
        </Section>

        {/* Buttons */}
        <Section title="Buttons">
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Primary Button</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Secondary Button</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.outlineButton}>
            <Text style={styles.outlineButtonText}>Outline Button</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Bell size={24} color="#333" />
          </TouchableOpacity>
        </Section>

        {/* Inputs */}
        <Section title="Inputs">
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Regular Input"
            />
          </View>

          <View style={styles.searchContainer}>
            <Search size={20} color="#999" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Input"
            />
          </View>
        </Section>

        {/* Cards */}
        <Section title="Cards">
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Basic Card</Text>
            <Text style={styles.cardBody}>This is a basic card component used throughout the app.</Text>
          </View>

          <View style={styles.expertCard}>
            <View style={styles.expertInfo}>
              <Text style={styles.expertName}>Expert Card</Text>
              <Text style={styles.expertSpecialty}>Plant Pathology</Text>
              <View style={styles.expertStats}>
                <View style={styles.ratingContainer}>
                  <ThumbsUp size={14} color="#5F8D4E" />
                  <Text style={styles.ratingText}>98%</Text>
                </View>
                <Text style={styles.consultations}>342 sessions</Text>
              </View>
            </View>
          </View>

          <View style={styles.consultationCard}>
            <View style={styles.consultationInfo}>
              <Text style={styles.consultationTitle}>Consultation Card</Text>
              <Text style={styles.consultationDate}>Yesterday, 2:30 PM</Text>
            </View>
            <View style={styles.consultationStatus}>
              <Text style={styles.consultationStatusText}>Completed</Text>
            </View>
          </View>
        </Section>

        {/* Icons */}
        <Section title="Icons">
          <View style={styles.iconGrid}>
            <View style={styles.iconItem}>
              <Bell size={24} color="#333" />
              <Text style={styles.iconLabel}>Bell</Text>
            </View>
            <View style={styles.iconItem}>
              <MessageCircle size={24} color="#333" />
              <Text style={styles.iconLabel}>Message</Text>
            </View>
            <View style={styles.iconItem}>
              <Star size={24} color="#333" />
              <Text style={styles.iconLabel}>Star</Text>
            </View>
            <View style={styles.iconItem}>
              <ThumbsUp size={24} color="#333" />
              <Text style={styles.iconLabel}>ThumbsUp</Text>
            </View>
          </View>
        </Section>

        {/* Spacing */}
        <Section title="Spacing">
          <View style={styles.spacingContainer}>
            <View style={[styles.spacingBox, { margin: 4 }]}>
              <Text style={styles.spacingText}>4px</Text>
            </View>
            <View style={[styles.spacingBox, { margin: 8 }]}>
              <Text style={styles.spacingText}>8px</Text>
            </View>
            <View style={[styles.spacingBox, { margin: 16 }]}>
              <Text style={styles.spacingText}>16px</Text>
            </View>
            <View style={[styles.spacingBox, { margin: 24 }]}>
              <Text style={styles.spacingText}>24px</Text>
            </View>
          </View>
        </Section>
      </ScrollView>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function ColorSwatch({ name, color, hex, isDark = true }) {
  return (
    <View style={styles.colorSwatch}>
      <View style={[styles.colorPreview, { backgroundColor: color }]} />
      <Text style={styles.colorName}>{name}</Text>
      <Text style={styles.colorHex}>{hex}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#285430',
    marginBottom: 16,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  colorSwatch: {
    width: '45%',
  },
  colorPreview: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  colorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  colorHex: {
    fontSize: 12,
    color: '#666',
  },
  heading1: {
    fontSize: 32,
    fontWeight: '700',
    color: '#285430',
    marginBottom: 16,
  },
  heading2: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  heading3: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: '#5F8D4E',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#E8F1E4',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: '#5F8D4E',
    fontSize: 16,
    fontWeight: '600',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5F8D4E',
    marginBottom: 12,
  },
  outlineButtonText: {
    color: '#5F8D4E',
    fontSize: 16,
    fontWeight: '600',
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  expertCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  expertInfo: {
    flex: 1,
  },
  expertName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  expertSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  expertStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    color: '#5F8D4E',
    fontWeight: '600',
  },
  consultations: {
    fontSize: 12,
    color: '#999',
  },
  consultationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  consultationInfo: {
    flex: 1,
  },
  consultationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  consultationDate: {
    fontSize: 12,
    color: '#999',
  },
  consultationStatus: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#E8F1E4',
    borderRadius: 16,
  },
  consultationStatusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5F8D4E',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
  },
  iconItem: {
    alignItems: 'center',
  },
  iconLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  },
  spacingContainer: {
    alignItems: 'flex-start',
  },
  spacingBox: {
    backgroundColor: '#E8F1E4',
    padding: 8,
    borderRadius: 4,
  },
  spacingText: {
    fontSize: 12,
    color: '#5F8D4E',
  },
});