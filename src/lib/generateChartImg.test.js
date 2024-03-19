const generateChartImg = require('./generateChartImg.js');

describe('generateChartImg', () => {
    it('should resolve with a blob URL from the Promise', async () => {
      // Mock successful fetch response
      const mockBlob = new Blob(['test'], { type: 'image/png' });
      const mockResponse = new Response(mockBlob, { status: 200 });
      jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);
  
      // Call the function
      const imgUrl = await generateChartImg('line', [], 'X Label', 'Y Label', 'Test Chart', '#ff0000');
  
      // Assertions
      expect(typeof imgUrl).toBe('string');
      // You may also want to validate the format of the URL if it's predictable
  
      // Verify fetch call
      expect(fetch).toHaveBeenCalledWith("https://quickchart.io/chart", {
          method: "POST",
          body: expect.any(String),
          headers: {
              "Content-Type": "application/json"
          }
      });
  
      // Clean up
      global.fetch.mockRestore();
    });
  });
  