namespace FlappyBirdBlazor.Models
{
    public class Pipe
    {
        public double X { get; set; }
        public double Y { get; set; }
        public double Width { get; set; }
        public double Height { get; set; }
        public bool Passed { get; set; }

        public Pipe(double canvasWidth, double canvasHeight, double pipeY)
        {
            X = canvasWidth;
            Y = pipeY;
            Width = 50;
            Height = canvasHeight;
            Passed = false;
        }

        public void Update(double speed)
        {
            X -= speed;
        }
    }
}