import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Users, 
  Search, 
  Bot,
  GraduationCap,
  Clock,
  Bell
} from 'lucide-react';

const CampusAssistant = () => {
  const [chatMessage, setChatMessage] = useState('');

  const features = [
    {
      icon: MessageCircle,
      title: 'AI Assistant',
      description: 'Get instant answers about courses, events, and campus life',
      color: 'bg-gradient-primary'
    },
    {
      icon: MapPin,
      title: 'Campus Maps',
      description: 'Navigate campus with interactive maps and directions',
      color: 'bg-secondary'
    },
    {
      icon: Calendar,
      title: 'Events & Schedule',
      description: 'Stay updated with campus events and your class schedule',
      color: 'bg-accent'
    },
    {
      icon: BookOpen,
      title: 'Study Resources',
      description: 'Access lecture notes, study materials, and academic resources',
      color: 'bg-gradient-primary'
    },
    {
      icon: Users,
      title: 'Student Community',
      description: 'Connect with classmates and join study groups',
      color: 'bg-secondary'
    },
    {
      icon: Search,
      title: 'Lost & Found',
      description: 'Report and find lost items across campus',
      color: 'bg-accent'
    }
  ];

  const quickActions = [
    'Find the library',
    'What\'s for lunch today?',
    'Show my class schedule',
    'Campus events this week'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Campus Assistant</h1>
                <p className="text-sm text-muted-foreground">Your intelligent campus companion</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="gap-1">
                <Clock className="w-3 h-3" />
                Online
              </Badge>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 px-4 text-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Smart Campus
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Assistant
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get instant help with navigation, schedules, dining, and campus life. 
              Powered by AI to make your student experience seamless.
            </p>
            
            {/* Quick Chat Interface */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Ask me anything about campus!</span>
                </div>
                <div className="flex gap-3">
                  <Input
                    placeholder="e.g., Where is the computer science building?"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button 
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={() => setChatMessage('')}
                  >
                    Ask
                  </Button>
                </div>
                
                {/* Quick Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {quickActions.map((action, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="sm"
                      className="bg-white/5 border-white/20 text-white hover:bg-white/10 text-xs"
                      onClick={() => setChatMessage(action)}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need for Campus Life
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From AI-powered assistance to interactive campus maps, we've got all your student needs covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with Supabase to unlock full functionality including authentication, 
              real-time features, and personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chatting
              </Button>
              <Button variant="outline" size="lg">
                <MapPin className="w-5 h-5 mr-2" />
                Explore Campus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Campus Assistant © 2024 - Making student life easier with AI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CampusAssistant;