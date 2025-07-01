/**
 * Hàm để khởi tạo biểu đồ tròn (pie/doughnut).
 */
function createPieChart() {
    const pieConfig = {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [530, 301, 432], // Dữ liệu mẫu
            backgroundColor: ['#77B0AA', '#FFD0EC', '#86B6F6'],
            label: 'Dataset 1',
          },
        ],
        labels: ['Teddy Bear', 'Baby Doll', 'Rabbit Doll'],
      },
      options: {
        responsive: true,
        cutoutPercentage: 80,
        legend: {
          display: false,
        },
      },
    }

    const pieCtx = document.getElementById('pie');
    // Kiểm tra xem canvas có tồn tại không trước khi tạo chart
    if(pieCtx) {
        window.myPie = new Chart(pieCtx, pieConfig);
    } else {
        console.warn("Canvas element with id 'pie' not found.");
    }
}