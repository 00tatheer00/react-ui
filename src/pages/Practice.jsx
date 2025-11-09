import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Chip, Card, CardContent, Button } from '@mui/material';
import PracticeCard from '../components/PracticeCard';

const starterExercises = [
  { id: 1, title: 'Algebra: Linear Equations', level: 'Easy', time: 15 },
  { id: 2, title: 'Algorithms: Binary Search', level: 'Medium', time: 20 },
  { id: 3, title: 'React: useState & Props', level: 'Easy', time: 25 },
  { id: 4, title: 'Data Structures: Hash Map', level: 'Hard', time: 30 },
  { id: 5, title: 'CSS: Flexbox practice', level: 'Easy', time: 10 },
];

export default function Practice() {
  // useState for search/filter and for starred exercises (bookmarks)
  const [query, setQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('All');
  const [starred, setStarred] = useState(() => new Set());

  const toggleStar = (id) => {
    setStarred(prev => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  };

  const levels = ['All', 'Easy', 'Medium', 'Hard'];

  const filtered = starterExercises.filter(ex => {
    const matchesQuery = ex.title.toLowerCase().includes(query.toLowerCase());
    const matchesLevel = levelFilter === 'All' || ex.level === levelFilter;
    return matchesQuery && matchesLevel;
  });

  return (
    <Container maxWidth="lg" className="py-8">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <Typography variant="h4" sx={{ fontWeight: 800 }}>Practice Exercises</Typography>
          <Typography className="text-slate-600">Choose exercises, filter by difficulty and save favorites to your profile.</Typography>
        </div>
        <div className="w-full md:w-auto">
          <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exercises..."
            size="small"
            variant="outlined"
            sx={{ bgcolor: 'background.paper' }}
          />
        </div>
      </div>

      <div className="mb-4 flex gap-2 items-center">
        {levels.map(l => (
          <Chip
            key={l}
            label={l}
            color={levelFilter === l ? 'primary' : 'default'}
            onClick={() => setLevelFilter(l)}
          />
        ))}
        <Button onClick={() => { setQuery(''); setLevelFilter('All'); }} size="small">Reset</Button>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {filtered.map(ex => (
              <Grid item xs={12} key={ex.id}>
                <PracticeCard
                  exercise={ex}
                  starred={starred.has(ex.id)}
                  onToggleStar={() => toggleStar(ex.id)}
                />
              </Grid>
            ))}
            {filtered.length === 0 && (
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography>No exercises match your filters. Try adjusting the search or difficulty.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="sticky top-28">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Quick Stats</Typography>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between">
                  <span>Available Exercises</span>
                  <span>{starterExercises.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Filtered</span>
                  <span>{filtered.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Favorites</span>
                  <span>{starred.size}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}