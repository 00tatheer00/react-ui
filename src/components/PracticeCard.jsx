import React from 'react';
import { Card, CardContent, Typography, Button, IconButton, Chip } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

export default function PracticeCard({ exercise, starred, onToggleStar }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Typography variant="h6" sx={{ fontWeight: 700 }}>{exercise.title}</Typography>
            <Chip label={exercise.level} size="small" />
          </div>
          <Typography className="text-slate-600 mt-2">Estimated time: {exercise.time} mins</Typography>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outlined" size="small">Start</Button>
          <IconButton onClick={onToggleStar} aria-label="star">
            {starred ? <Star color="warning" /> : <StarBorder />}
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}