
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Building2, DollarSign, User } from "lucide-react";

const employeeData = {
  name: "John Doe",
  age: 32,
  position: "Senior Software Engineer",
  salary: 95000,
  department: "Engineering",
  joinDate: "2021-03-15",
};

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
          <Button variant="outline" onClick={logout}>
            Sign Out
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Employee Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Name & Age</p>
                <p className="font-medium">
                  {employeeData.name} ({employeeData.age})
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-2 bg-green-100 rounded-full">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Position</p>
                <p className="font-medium">{employeeData.position}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-2 bg-purple-100 rounded-full">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Annual Salary</p>
                <p className="font-medium">
                  ${employeeData.salary.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-2 bg-orange-100 rounded-full">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium">{employeeData.department}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
