import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  episodes: number;
  voices: number;
  description?: string;
  featured?: boolean;
}

interface AdminPanelProps {
  onAddAnime: (anime: Anime) => void;
}

export const AdminPanel = ({ onAddAnime }: AdminPanelProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    rating: '',
    year: '',
    genre: '',
    episodes: '',
    voices: '',
    featured: false,
  });

  const genres = ['Экшн', 'Сёнэн', 'Триллер', 'Приключения', 'Романтика', 'Фэнтези', 'Меха', 'Комедия'];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.genre || !formData.year) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все обязательные поля',
        variant: 'destructive',
      });
      return;
    }

    const newAnime: Anime = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      image: formData.image || 'https://cdn.poehali.dev/projects/3d8133c4-3bb1-4a71-b856-a5e46151bd2c/files/ad62232c-c374-44e8-8589-84d5bfe9cae3.jpg',
      rating: parseFloat(formData.rating) || 0,
      year: parseInt(formData.year),
      genre: formData.genre,
      episodes: parseInt(formData.episodes) || 0,
      voices: parseInt(formData.voices) || 0,
      featured: formData.featured,
    };

    onAddAnime(newAnime);
    
    toast({
      title: 'Успешно!',
      description: `Аниме "${newAnime.title}" добавлено в каталог`,
    });

    setFormData({
      title: '',
      description: '',
      image: '',
      rating: '',
      year: '',
      genre: '',
      episodes: '',
      voices: '',
      featured: false,
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Icon name="Plus" size={20} className="mr-2" />
          Добавить аниме
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Добавить новое аниме</DialogTitle>
          <DialogDescription>
            Заполните информацию о тайтле для добавления в каталог
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Название аниме *</Label>
            <Input
              id="title"
              placeholder="Например: Атака Титанов"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              placeholder="Краткое описание сюжета..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="genre">Жанр *</Label>
              <Select value={formData.genre} onValueChange={(value) => setFormData({ ...formData, genre: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите жанр" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Год выхода *</Label>
              <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите год" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rating">Рейтинг</Label>
              <Input
                id="rating"
                type="number"
                step="0.1"
                min="0"
                max="10"
                placeholder="8.5"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="episodes">Эпизодов</Label>
              <Input
                id="episodes"
                type="number"
                min="0"
                placeholder="24"
                value={formData.episodes}
                onChange={(e) => setFormData({ ...formData, episodes: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="voices">Озвучек</Label>
              <Input
                id="voices"
                type="number"
                min="0"
                placeholder="5"
                value={formData.voices}
                onChange={(e) => setFormData({ ...formData, voices: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">URL обложки</Label>
            <Input
              id="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
            <p className="text-xs text-muted-foreground">
              Если не указано, будет использована обложка по умолчанию
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 rounded border-border"
            />
            <Label htmlFor="featured" className="cursor-pointer">
              Показывать в главном баннере
            </Label>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Plus" size={20} className="mr-2" />
              Добавить аниме
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
