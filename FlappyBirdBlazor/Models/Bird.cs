namespace FlappyBirdBlazor.Models
{
   
    public class Bird
    {
        
        public double X { get; set; }
        public double Y { get; set; }
        public double Width { get; set; }
        public double Height { get; set; }
        public double Gravity { get; set; }
        public double Velocity { get; set; }

       
        public Bird()
        {
            X = 50;
            Y = 150;
            Width = 34;
            Height = 24;
            Gravity = 0.25; // Bu ayar aynı kaldı
            Velocity = 0;
        }

        
        public void Update()
        {
            // Fizik kurallarını uygula
            Velocity += Gravity;
            Y += Velocity;
        }

        public void Jump()
        {
            // Zıplama kuvvetini uygula
            Velocity = -6.5; 
        }
    }
}
