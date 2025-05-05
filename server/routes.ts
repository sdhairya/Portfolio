import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.saveContactMessage(validatedData);
      
      // In a production environment, this would send an email
      // For now, we'll just log the message
      console.log("New contact message received:", message);
      
      res.status(200).json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to process your message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
