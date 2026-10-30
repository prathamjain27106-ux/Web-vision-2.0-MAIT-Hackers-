export const commodities = [
  "Wheat",
  "Mustard",
  "Bajra",
  "Soybean",
  "Gram"
];

export const mandis = [
  {
    id: 1,
    name: "Kota Mandi",
    district: "Kota",
    commodity: "Wheat",
    minPrice: 2250,
    maxPrice: 2550,
    modalPrice: 2450,
    transport: 450,
    loadingPerQtl: 10,
    commissionRate: 1
  },
  {
    id: 2,
    name: "Jaipur Mandi",
    district: "Jaipur",
    commodity: "Wheat",
    minPrice: 2300,
    maxPrice: 2650,
    modalPrice: 2550,
    transport: 850,
    loadingPerQtl: 10,
    commissionRate: 1
  },
  {
    id: 3,
    name: "Ajmer Mandi",
    district: "Ajmer",
    commodity: "Wheat",
    minPrice: 2350,
    maxPrice: 2600,
    modalPrice: 2500,
    transport: 550,
    loadingPerQtl: 10,
    commissionRate: 1
  },
  {
    id: 4,
    name: "Alwar Mandi",
    district: "Alwar",
    commodity: "Wheat",
    minPrice: 2200,
    maxPrice: 2500,
    modalPrice: 2400,
    transport: 300,
    loadingPerQtl: 10,
    commissionRate: 1
  },
  {
    id: 5,
    name: "Kota Mandi",
    district: "Kota",
    commodity: "Mustard",
    minPrice: 5400,
    maxPrice: 5900,
    modalPrice: 5700,
    transport: 450,
    loadingPerQtl: 10,
    commissionRate: 1
  },
  {
    id: 6,
    name: "Jaipur Mandi",
    district: "Jaipur",
    commodity: "Mustard",
    minPrice: 5500,
    maxPrice: 6100,
    modalPrice: 5900,
    transport: 850,
    loadingPerQtl: 10,
    commissionRate: 1
  },
  {
    id: 7,
    name: "Ajmer Mandi",
    district: "Ajmer",
    commodity: "Mustard",
    minPrice: 5550,
    maxPrice: 6000,
    modalPrice: 5800,
    transport: 550,
    loadingPerQtl: 10,
    commissionRate: 1
  },
  {
    id: 8,
    name: "Alwar Mandi",
    district: "Alwar",
    commodity: "Mustard",
    minPrice: 5350,
    maxPrice: 5800,
    modalPrice: 5600,
    transport: 300,
    loadingPerQtl: 10,
    commissionRate: 1
  }
];

export const trades = [
  {
    id: "TRD-001",
    commodity: "Wheat",
    mandi: "Kota Mandi",
    quantity: 25,
    rate: 2450,
    date: "28 Oct 2026",
    status: "Completed"
  },
  {
    id: "TRD-002",
    commodity: "Mustard",
    mandi: "Jaipur Mandi",
    quantity: 15,
    rate: 5900,
    date: "27 Oct 2026",
    status: "In Progress"
  },
  {
    id: "TRD-003",
    commodity: "Bajra",
    mandi: "Ajmer Mandi",
    quantity: 20,
    rate: 2200,
    date: "25 Oct 2026",
    status: "Completed"
  },
  {
    id: "TRD-004",
    commodity: "Gram",
    mandi: "Alwar Mandi",
    quantity: 10,
    rate: 5100,
    date: "24 Oct 2026",
    status: "Pending"
  }
];

export const payments = [
  {
    id: "PAY-001",
    tradeId: "TRD-001",
    commodity: "Wheat",
    amount: 61250,
    date: "28 Oct 2026",
    status: "Paid"
  },
  {
    id: "PAY-002",
    tradeId: "TRD-002",
    commodity: "Mustard",
    amount: 88500,
    date: "27 Oct 2026",
    status: "Processing"
  },
  {
    id: "PAY-003",
    tradeId: "TRD-003",
    commodity: "Bajra",
    amount: 44000,
    date: "25 Oct 2026",
    status: "Paid"
  },
  {
    id: "PAY-004",
    tradeId: "TRD-004",
    commodity: "Gram",
    amount: 51000,
    date: "24 Oct 2026",
    status: "Pending"
  }
];