"use client"

import { BarChart3, Image as ImageIcon, Keyboard, Phone, CheckCircle, XCircle, PhoneOff, ArrowUp, ArrowDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, Filler } from "chart.js";
import { useState, useEffect } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Cell, Legend as RechartsLegend, Pie as RechartsPie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, Filler);

interface CallData {
  date: string;
  name: string;
  status: 'positive' | 'negative' | 'rejected' | 'neutral';
  duration: string;
}

const Overview = ({ callsData }: { callsData: CallData[] }) => {
  console.log('Overview component received callsData:', callsData);
  if (callsData.length === 0) return <div className="h-40 flex items-center justify-center text-gray-400">No data available for chart.</div>;

  const dailyCounts = callsData.reduce((acc, call) => {
    if (!acc[call.date]) {
      acc[call.date] = { positive: 0, negative: 0, rejected: 0 };
    }
    if (call.status === 'positive') acc[call.date].positive++;
    else if (call.status === 'negative') acc[call.date].negative++;
    else if (call.status === 'rejected') acc[call.date].rejected++;
    return acc;
  }, {} as Record<string, { positive: number, negative: number, rejected: number }>);

  const sortedDates = Object.keys(dailyCounts).sort();

  const data = {
    labels: sortedDates.map(d => {
      const date = new Date(d);
      return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}`;
    }),
    datasets: [
      {
        label: "Positive",
        data: sortedDates.map(date => dailyCounts[date].positive),
        backgroundColor: "rgba(34,197,94,0.8)",
        borderRadius: 5,
        barThickness: 7,
      },
      {
        label: "Negative",
        data: sortedDates.map(date => dailyCounts[date].negative),
        backgroundColor: "rgba(239,68,68,0.8)",
        borderRadius: 5,
        barThickness: 7,
      },
      {
        label: "Rejected",
        data: sortedDates.map(date => dailyCounts[date].rejected),
        backgroundColor: "rgba(234,179,8,0.8)",
        borderRadius: 5,
        barThickness: 7,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
          title: { display: false },
        },
        scales: {
          x: { stacked: false },
          y: { beginAtZero: true, stacked: false, max: 6 },
        },
      }}
    />
  );
};

const CallsBreakdown = ({ callsData }: { callsData: CallData[] }) => {
  if (callsData.length === 0) return <div className="h-40 flex items-center justify-center text-gray-400">No data available for chart.</div>;

  const statusCounts = callsData.reduce((acc, call) => {
    acc[call.status] = (acc[call.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieChartData = Object.keys(statusCounts).map(status => {
    let color = '#cccccc'; 
    if (status === 'positive') color = '#10b981';
    else if (status === 'negative') color = '#ef4444';
    else if (status === 'rejected') color = '#f59e0b';

    return {
      name: `${status.charAt(0).toUpperCase() + status.slice(1)} Calls`, 
      value: statusCounts[status],
      color: color,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <RechartsPie
          data={pieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100} 
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </RechartsPie>
        <RechartsTooltip />
        <RechartsLegend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

const RecentCalls = ({ callsData }: { callsData: CallData[] }) => {
  const recentCalls = [...callsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    callsData.length === 0 ? <div className="h-40 flex items-center justify-center text-gray-400">No data available for list.</div> : 
    <div className="space-y-4">
      {recentCalls.map((call, index) => (
        <div key={index} className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
          <div>
            <p className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300">{call.name}</p>
            <p className="text-sm text-gray-400">{call.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs ${
              call.status === 'positive' ? 'bg-green-500/20 text-green-400' :
              call.status === 'negative' ? 'bg-red-500/20 text-red-400' :
              call.status === 'rejected' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {call.status}
            </span>
            <span className="text-sm text-gray-400">{call.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const CallsTimeline = ({ callsData }: { callsData: CallData[] }) => {
  if (callsData.length === 0) return <div className="h-40 flex items-center justify-center text-gray-400">No data available for chart.</div>;

  const dailyDurations = callsData.reduce((acc, call) => {
    if (!acc[call.date]) {
      acc[call.date] = 0;
    }
    const [minutes, seconds] = call.duration.split(':').map(Number);
    acc[call.date] += (minutes * 60) + seconds;
    return acc;
  }, {} as Record<string, number>);

  const sortedDates = Object.keys(dailyDurations).sort();

  const data = {
    labels: sortedDates.map(d => {
      const date = new Date(d);
      return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}`;;
    }),
    datasets: [{
      label: 'Total Duration (seconds)',
      data: sortedDates.map(date => dailyDurations[date]),
      borderColor: 'rgb(99, 102, 241)',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(99, 102, 241, 0.1)'
    }]
  };

  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
          title: { display: false },
        },
        scales: {
          x: { stacked: false },
          y: { beginAtZero: true },
        },
      }}
    />
  );
};

const CallsPerformance = ({ callsData }: { callsData: CallData[] }) => {
  const performanceData = callsData.reduce((acc, call) => {
    const date = call.date;
    if (!acc[date]) {
      acc[date] = { positive: 0, total: 0 };
    }
    acc[date].total++;
    if (call.status === 'positive') {
      acc[date].positive++;
    }
    return acc;
  }, {} as Record<string, { positive: number, total: number }>);

  const sortedDates = Object.keys(performanceData).sort();

  const data = {
    labels: sortedDates.map(d => {
      const date = new Date(d);
      return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}`;
    }),
    datasets: [{
      label: 'Success Rate',
      data: sortedDates.map(date => (performanceData[date].positive / performanceData[date].total) * 100),
      borderColor: 'rgb(34, 197, 94)',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(34, 197, 94, 0.1)'
    }]
  };

  return (callsData.length === 0 ? <div className="h-40 flex items-center justify-center text-gray-400">No data available for chart.</div> : <Line data={data} />);
};

export default function AnalysesPage() {
  const [callsData, setCallsData] = useState<CallData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/calls.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CallData[] = await response.json();
        setCallsData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalCalls = callsData.length;
  const positiveCalls = callsData.filter(call => call.status === 'positive').length;
  const negativeCalls = callsData.filter(call => call.status === 'negative').length;
  const rejectedCalls = callsData.filter(call => call.status === 'rejected').length;

  const calculateChange = (current: number, previous: number) => {
    if (previous === 0) return 100;
    return ((current - previous) / previous) * 100;
  };

  const currentMonthCalls = callsData.filter(call => {
    const callDate = new Date(call.date);
    const currentDate = new Date();
    return callDate.getMonth() === currentDate.getMonth() && 
           callDate.getFullYear() === currentDate.getFullYear();
  });

   const previousMonthCalls = callsData.filter(call => {
    const callDate = new Date(call.date);
    const currentDate = new Date();
    const previousMonth = currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1;
    const previousYear = currentDate.getMonth() === 0 ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
    return callDate.getMonth() === previousMonth && 
           callDate.getFullYear() === previousYear;
  });

  const prevTotalCalls = previousMonthCalls.length;
  const prevPositiveCalls = previousMonthCalls.filter(call => call.status === 'positive').length;
  const prevNegativeCalls = previousMonthCalls.filter(call => call.status === 'negative').length;
  const prevRejectedCalls = previousMonthCalls.filter(call => call.status === 'rejected').length;

  const totalChange = calculateChange(currentMonthCalls.length, prevTotalCalls);
  const positiveChange = calculateChange(currentMonthCalls.filter(call => call.status === 'positive').length, prevPositiveCalls);
  const negativeChange = calculateChange(currentMonthCalls.filter(call => call.status === 'negative').length, prevNegativeCalls);
  const rejectedChange = calculateChange(currentMonthCalls.filter(call => call.status === 'rejected').length, prevRejectedCalls);

  if (loading) return <div className="min-h-screen w-full bg-gradient-to-br from-[#18132a] to-[#1a0066] p-6 text-white">Loading analyses data...</div>;
  if (error) return <div className="min-h-screen w-full bg-gradient-to-br from-[#18132a] to-[#1a0066] p-6 text-red-500">Error loading analyses data: {error}</div>;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18132a] via-[#1a0066] to-[#2a0080] p-6">
      <div className="flex flex-row items-center gap-8 mb-12">
        <div 
          className="text-4xl font-bold tracking-widest hover:scale-105 transition-transform duration-300 cursor-pointer" 
          style={{ letterSpacing: '0.2em' }}
          onClick={() => window.location.href = '/'}
        >
          <span className="bg-gradient-to-r from-green-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">VARIA</span>
        </div>
        <div className="flex justify-center items-center gap-8 bg-black/40 backdrop-blur-sm rounded-full px-6 py-3 w-[240px] shadow-lg border border-white/10">
          <button
            className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
            onClick={() => window.location.href = '/dashboard'}
          >
            <Keyboard className="w-5 h-5 text-gray-200 hover:text-white" />
          </button>
          <button
            className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
            onClick={() => window.location.href = '/analyses'}
          >
            <BarChart3 className="w-5 h-5 text-gray-200 hover:text-white" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-all duration-300">
            <ImageIcon className="w-5 h-5 text-gray-200 hover:text-white" />
          </button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8 bg-black/40 backdrop-blur-sm border border-white/10 p-1 rounded-full">
          <TabsTrigger value="overview" className="rounded-full data-[state=active]:bg-white/10 transition-all duration-300">Overview</TabsTrigger>
          <TabsTrigger value="calls" className="rounded-full data-[state=active]:bg-white/10 transition-all duration-300">Calls</TabsTrigger>
          <TabsTrigger value="performance" className="rounded-full data-[state=active]:bg-white/10 transition-all duration-300">Performance</TabsTrigger>
          <TabsTrigger value="agents" className="rounded-full data-[state=active]:bg-white/10 transition-all duration-300">Agents</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">Total Calls</CardTitle>
                <Phone className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{totalCalls}</div>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">Positive Calls</CardTitle>
                <CheckCircle className="h-4 w-4 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{positiveCalls}</div>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">Negative Calls</CardTitle>
                <XCircle className="h-4 w-4 text-rose-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{negativeCalls}</div>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">Rejected Calls</CardTitle>
                <PhoneOff className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{rejectedCalls}</div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Call Overview</CardTitle>
                <CardDescription className="text-gray-400">Call performance over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2 min-h-[250px]">
                <Overview callsData={callsData} />
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Call Breakdown</CardTitle>
                <CardDescription className="text-gray-400">Distribution of call outcomes</CardDescription>
              </CardHeader>
              <CardContent className="min-h-[250px] flex items-center justify-center">
                <CallsBreakdown callsData={callsData} />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Recent Calls</CardTitle>
                <CardDescription className="text-gray-400">Latest call activities and outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentCalls callsData={callsData} />
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Daily Call Duration</CardTitle>
                <CardDescription className="text-gray-400">Total call duration by day</CardDescription>
              </CardHeader>
              <CardContent>
                <CallsTimeline callsData={callsData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="calls" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Call Details</CardTitle>
              <CardDescription className="text-gray-400">Detailed breakdown of all calls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {callsData.map((call, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300">
                    <div>
                      <p className="font-medium text-white">{call.name}</p>
                      <p className="text-sm text-gray-400">{call.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        call.status === 'positive' ? 'bg-green-500/20 text-green-400' :
                        call.status === 'negative' ? 'bg-red-500/20 text-red-400' :
                        call.status === 'rejected' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {call.status}
                      </span>
                      <span className="text-sm text-gray-400">{call.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Performance Metrics</CardTitle>
              <CardDescription className="text-gray-400">Detailed performance analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <CallsPerformance callsData={callsData} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="agents" className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">Agent Performance</CardTitle>
              <CardDescription className="text-gray-400">Individual agent metrics and comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Agent performance metrics would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 