   import express, { Request, Response } from 'express';
   import { PrismaClient } from '@prisma/client';
   const app = express();
   const prisma = new PrismaClient();
      // Create a new user
      app.post('/users', async (req: Request, res: Response) => {
        const { email, password, name, dateOfBirth, onboardingCompleted, preferences } = req.body;
        try {
          const newUser = await prisma.user.create({
            data: {
              email,
              password,
              name,
              dateOfBirth: new Date(dateOfBirth),
              onboardingCompleted,
              preferences,
            },
          });
          res.json(newUser);
        } catch (error) {
          res.status(500).json({ error: 'User creation failed' });
        }
      });
   
      // Fetch all users
      app.get('/users', async (req: Request, res: Response) => {
        try {
          const users = await prisma.user.findMany();
          res.json(users);
        } catch (error) {
          res.status(500).json({ error: 'Failed to fetch users' });
        }
      });

   const port = 3000;

   app.get('/', (req: Request, res: Response) => {
     res.send('Hello, TypeScript with Express!');
   });

   app.listen(port, () => {
     console.log(`Server is running at http://localhost:${port}`);
   });



