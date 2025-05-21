import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Bell, Search, MapPin, Sun, Cloud, Droplets, Wind, ThumbsUp, Star } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.name}>John Farmer</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={24} color="#333" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Search Bar */}
      <TouchableOpacity style={styles.searchBar}>
        <Search size={20} color="#999" />
        <Text style={styles.searchPlaceholder}>Search for experts, crops, issues...</Text>
      </TouchableOpacity>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Location and Weather */}
        <View style={styles.weatherCard}>
          <View style={styles.locationRow}>
            <MapPin size={16} color="#5F8D4E" />
            <Text style={styles.locationText}>Central Valley Farm, CA</Text>
          </View>
          
          <View style={styles.weatherRow}>
            <View style={styles.weatherMain}>
              <Sun size={32} color="#F59E0B" />
              <Text style={styles.weatherTemp}>78°F</Text>
            </View>
            
            <View style={styles.weatherDetails}>
              <View style={styles.weatherItem}>
                <Cloud size={16} color="#666" />
                <Text style={styles.weatherItemText}>10%</Text>
              </View>
              <View style={styles.weatherItem}>
                <Droplets size={16} color="#3B82F6" />
                <Text style={styles.weatherItemText}>45%</Text>
              </View>
              <View style={styles.weatherItem}>
                <Wind size={16} color="#666" />
                <Text style={styles.weatherItemText}>8mph</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Featured Experts */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Agricultural Experts</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.expertsContainer}
        >
          {experts.map((expert, index) => (
            <TouchableOpacity key={index} style={styles.expertCard}>
              <Image source={{ uri: expert.image }} style={styles.expertImage} />
              <View style={styles.expertBadge}>
                <Star size={12} color="#FFFFFF" fill="#FFFFFF" />
              </View>
              <View style={styles.expertInfo}>
                <Text style={styles.expertName}>{expert.name}</Text>
                <Text style={styles.expertSpecialty}>{expert.specialty}</Text>
                <View style={styles.expertStats}>
                  <View style={styles.ratingContainer}>
                    <ThumbsUp size={14} color="#5F8D4E" />
                    <Text style={styles.ratingText}>{expert.rating}%</Text>
                  </View>
                  <Text style={styles.consultations}>{expert.consultations} sessions</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Advice Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick Advice Categories</Text>
        </View>
        
        <View style={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={styles.categoryGradient}
              />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Recent Consultations */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Recent Activity</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.consultationsContainer}>
          {consultations.map((consultation, index) => (
            <TouchableOpacity key={index} style={styles.consultationCard}>
              <Image source={{ uri: consultation.expertImage }} style={styles.consultationExpertImage} />
              <View style={styles.consultationInfo}>
                <Text style={styles.consultationTitle}>{consultation.title}</Text>
                <Text style={styles.consultationDate}>{consultation.date}</Text>
              </View>
              <View style={[
                styles.consultationStatus, 
                { backgroundColor: getStatusColor(consultation.status) }
              ]}>
                <Text style={styles.consultationStatusText}>{consultation.status}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Helper function for status colors
const getStatusColor = (status) => {
  switch(status) {
    case 'Completed': return '#E8F1E4';
    case 'Scheduled': return '#FEF3C7';
    case 'In Progress': return '#DBEAFE';
    default: return '#E8F1E4';
  }
};

// Sample data
const experts = [
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Plant Pathology',
    rating: 98,
    consultations: 342,
    image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg'
  },
  {
    name: 'Mark Johnson',
    specialty: 'Soil Science',
    rating: 95,
    consultations: 287,
    image: 'https://images.pexels.com/photos/1427236/pexels-photo-1427236.jpeg'
  },
  {
    name: 'Dr. Anita Patel',
    specialty: 'Irrigation Systems',
    rating: 97,
    consultations: 219,
    image: 'https://images.pexels.com/photos/7518637/pexels-photo-7518637.jpeg'
  }
];

const categories = [
  {
    name: 'Crop Protection',
    image: 'https://images.pexels.com/photos/6685813/pexels-photo-6685813.jpeg'
  },
  {
    name: 'Soil Management',
    image: 'https://images.pexels.com/photos/7728383/pexels-photo-7728383.jpeg'
  },
  {
    name: 'Irrigation & Water',
    image: 'https://images.pexels.com/photos/4149260/pexels-photo-4149260.jpeg'
  },
  {
    name: 'Sustainable Farming',
    image: 'https://images.pexels.com/photos/2132164/pexels-photo-2132164.jpeg'
  }
];

const consultations = [
  {
    title: 'Tomato Blight Solutions',
    expertImage: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg',
    date: 'Yesterday, 2:30 PM',
    status: 'Completed'
  },
  {
    title: 'Soil Nutrient Analysis',
    expertImage: 'https://images.pexels.com/photos/1427236/pexels-photo-1427236.jpeg',
    date: 'Tomorrow, 10:00 AM',
    status: 'Scheduled'
  },
  {
    title: 'Irrigation System Setup',
    expertImage: 'https://images.pexels.com/photos/7518637/pexels-photo-7518637.jpeg',
    date: 'Now',
    status: 'In Progress'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#285430',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 16,
  },
  searchPlaceholder: {
    marginLeft: 10,
    color: '#999',
    fontSize: 14,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  weatherCard: {
    backgroundColor: '#F9FAFC',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#5F8D4E',
    fontWeight: '500',
  },
  weatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherTemp: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginLeft: 12,
  },
  weatherDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  weatherItemText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#285430',
  },
  seeAllButton: {
    fontSize: 14,
    color: '#5F8D4E',
    fontWeight: '500',
  },
  expertsContainer: {
    paddingLeft: 20,
    paddingRight: 8,
  },
  expertCard: {
    width: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginRight: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  expertImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  expertBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#5F8D4E',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  expertInfo: {
    padding: 12,
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
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  categoryCard: {
    width: '48%',
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  categoryName: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  consultationsContainer: {
    paddingHorizontal: 20,
  },
  consultationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  consultationExpertImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  consultationInfo: {
    flex: 1,
    marginLeft: 12,
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
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  consultationStatusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5F8D4E',
  },
});