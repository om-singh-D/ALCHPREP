"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import LenisProvider from "@/components/ui/lenisProvider";

export default function ComponentsTestPage() {
  const [selectedValue, setSelectedValue] = useState("");
  const [showAnimated, setShowAnimated] = useState(true);

  return (
    <LenisProvider>
      <div className="min-h-screen bg-background p-8 space-y-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <TextEffect
            per="word"
            preset="fade-in-blur"
            className="text-4xl font-bold text-center mb-12"
          >
            UI Components & Animation Test
          </TextEffect>

          {/* Button Component Section */}
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
              <CardDescription>
                Various button variants and sizes with accessibility features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatedGroup preset="slide" className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </AnimatedGroup>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-4">Button Sizes</h4>
                <AnimatedGroup preset="scale" className="flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">🎯</Button>
                </AnimatedGroup>
              </div>
            </CardContent>
          </Card>

          {/* Select Component Section */}
          <Card>
            <CardHeader>
              <CardTitle>Select Component</CardTitle>
              <CardDescription>
                Dropdown select with Radix UI primitives and keyboard navigation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatedGroup preset="fade">
                <Select value={selectedValue} onValueChange={setSelectedValue}>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Choose a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                    <SelectItem value="solid">SolidJS</SelectItem>
                  </SelectContent>
                </Select>
                {selectedValue && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Selected: {selectedValue}
                  </p>
                )}
              </AnimatedGroup>
            </CardContent>
          </Card>

          {/* Card Component Section */}
          <Card>
            <CardHeader>
              <CardTitle>Card Layouts</CardTitle>
              <CardDescription>
                Flexible card layouts with header, content, and footer sections
              </CardDescription>
              <CardAction>
                <Button variant="ghost" size="sm">
                  Action
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Feature Card</CardTitle>
                    <CardDescription>
                      This is a nested card demonstrating the slot architecture
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Cards can contain any content and are fully customizable with Tailwind CSS.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Another Card</CardTitle>
                    <CardDescription>
                      Demonstrating multiple cards in a grid layout
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Status: Active</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedGroup>
            </CardContent>
          </Card>

          {/* Animation Components Section */}
          <Card>
            <CardHeader>
              <CardTitle>Animation Components</CardTitle>
              <CardDescription>
                Advanced animation system with multiple presets using Framer Motion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h4 className="text-sm font-medium mb-4">Text Effects</h4>
                <div className="space-y-4">
                  <TextEffect preset="blur" className="text-lg">
                    This text uses blur animation
                  </TextEffect>
                  <TextEffect preset="slide" className="text-lg">
                    This text slides in from below
                  </TextEffect>
                  <TextEffect preset="scale" className="text-lg">
                    This text scales up smoothly
                  </TextEffect>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-4">Animated Groups</h4>
                <Button
                  onClick={() => setShowAnimated(!showAnimated)}
                  className="mb-4"
                >
                  Toggle Animation
                </Button>
                
                {showAnimated && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Bounce preset:</p>
                      <AnimatedGroup preset="bounce" className="flex gap-2">
                        <div className="w-12 h-12 bg-blue-500 rounded"></div>
                        <div className="w-12 h-12 bg-green-500 rounded"></div>
                        <div className="w-12 h-12 bg-purple-500 rounded"></div>
                      </AnimatedGroup>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Flip preset:</p>
                      <AnimatedGroup preset="flip" className="flex gap-2">
                        <div className="w-12 h-12 bg-red-500 rounded"></div>
                        <div className="w-12 h-12 bg-yellow-500 rounded"></div>
                        <div className="w-12 h-12 bg-indigo-500 rounded"></div>
                      </AnimatedGroup>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Zoom preset:</p>
                      <AnimatedGroup preset="zoom" className="flex gap-2">
                        <div className="w-12 h-12 bg-pink-500 rounded"></div>
                        <div className="w-12 h-12 bg-cyan-500 rounded"></div>
                        <div className="w-12 h-12 bg-orange-500 rounded"></div>
                      </AnimatedGroup>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Design System Section */}
          <Card>
            <CardHeader>
              <CardTitle>Design System</CardTitle>
              <CardDescription>
                Consistent spacing, typography, and color tokens for theming
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatedGroup preset="fade" className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Color Tokens</h4>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                    <div className="w-8 h-8 bg-secondary rounded"></div>
                    <div className="w-8 h-8 bg-muted rounded"></div>
                    <div className="w-8 h-8 bg-accent rounded"></div>
                    <div className="w-8 h-8 bg-destructive rounded"></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Typography Scale</h4>
                  <div className="space-y-2">
                    <p className="text-xs">Extra small text</p>
                    <p className="text-sm">Small text</p>
                    <p className="text-base">Base text</p>
                    <p className="text-lg">Large text</p>
                    <p className="text-xl">Extra large text</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Border Radius & Shadows</h4>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-card border rounded-sm shadow-xs"></div>
                    <div className="w-16 h-16 bg-card border rounded-md shadow-sm"></div>
                    <div className="w-16 h-16 bg-card border rounded-lg shadow-md"></div>
                    <div className="w-16 h-16 bg-card border rounded-xl shadow-lg"></div>
                  </div>
                </div>
              </AnimatedGroup>
            </CardContent>
            <CardFooter>
              <TextEffect preset="fade" className="text-sm text-muted-foreground">
                All components support dark/light theme and are screen reader accessible
              </TextEffect>
            </CardFooter>
          </Card>
        </div>
      </div>
    </LenisProvider>
  );
}