import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxWidth="lg" className="py-8">
      <div className="rounded-xl p-8 bg-gradient-to-r from-white to-indigo-50 shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
              Practice. Improve. Repeat.
            </Typography>
            <Typography variant="body1" className="text-slate-600 mb-6">
              A simple, beautiful practice site for students to build skills with hands-on exercises, curated resources and progress tracking.
            </Typography>
            <div className="flex gap-3">
              <Button component={Link} to="/practice" variant="contained" size="large">Start Practicing</Button>
              <Button component={Link} to="/resources" variant="outlined" size="large">Browse Resources</Button>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80&auto=format&fit=crop" alt="students" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <Grid container spacing={4} className="mt-8">
        <Grid item xs={12} md={4}>
          <Card className="h-full">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Guided Practice</Typography>
              <Typography className="text-slate-600 mt-2">Step-by-step practice sessions with immediate feedback and hints.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="h-full">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Curated Resources</Typography>
              <Typography className="text-slate-600 mt-2">Articles, videos and cheat-sheets handpicked for learners.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="h-full">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Track Progress</Typography>
              <Typography className="text-slate-600 mt-2">Simple progress indicators so learners can stay motivated.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}