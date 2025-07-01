/**
 * Hàm để khởi tạo biểu đồ đường (line).
 */
function createLineChart() {
    const lineConfig = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: '<$10000',
            backgroundColor: '#FF76CE',
            borderColor: '#FF76CE',
            data: [43, 48, 40, 54, 67, 73, 70], // Dữ liệu mẫu
            fill: false,
          },
          {
            label: '>$10000',
            fill: false,
            backgroundColor: '#40A2D8',
            borderColor: '#40A2D8',
            data: [24, 50, 64, 74, 52, 51, 65], // Dữ liệu mẫu
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        // ... (các options khác)
      },
    }

    const lineCtx = document.getElementById('line');
    // Kiểm tra xem canvas có tồn tại không trước khi tạo chart
    if(lineCtx) {
        window.myLine = new Chart(lineCtx, lineConfig);
    } else {
        console.warn("Canvas element with id 'line' not found.");
    }
}