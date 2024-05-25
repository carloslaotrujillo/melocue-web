/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wgZTU1v24VR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="w-full max-w-[1200px] mx-auto py-8 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm">
          <div className="h-[200px] bg-gradient-to-r from-[#00b894] to-[#55efc4] rounded-t-lg" />
          <div className="relative -mt-[80px] mx-6">
            <div className="w-[120px] h-[120px] rounded-full bg-white dark:bg-gray-950 border-4 border-white dark:border-gray-950 overflow-hidden">
              <img
                alt="User Avatar"
                className="w-full h-full object-cover"
                height={120}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">Jared Palmer</h2>
              <p className="text-gray-500 dark:text-gray-400">@jaredpalmer</p>
            </div>
            <div className="mt-4 text-center text-sm">
              <p>Software Engineer at Acme Inc.</p>
              <p className="mt-2">San Francisco, CA</p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                I'm a software engineer with a passion for building beautiful and functional web applications.
              </p>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <Button size="sm">
                <MessageCircleIcon className="mr-2 h-4 w-4" />
                Message
              </Button>
              <Button size="sm" variant="outline">
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Posts</h2>
              <Link className="text-primary hover:underline" href="#">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardContent className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    alt="Post Image"
                    className="w-full h-full object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-sm font-medium">Jared Palmer</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">@jaredpalmer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HeartIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">123</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    alt="Post Image"
                    className="w-full h-full object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-sm font-medium">Jared Palmer</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">@jaredpalmer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HeartIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">123</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    alt="Post Image"
                    className="w-full h-full object-cover"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-sm font-medium">Jared Palmer</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">@jaredpalmer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HeartIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">123</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Followers</h2>
              <Link className="text-primary hover:underline" href="#">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">John Doe</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">@johndoe</p>
                </div>
                <Button size="sm" variant="outline">
                  Follow
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">Jane Doe</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">@janedoe</p>
                </div>
                <Button size="sm" variant="outline">
                  Follow
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">John Smith</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">@johnsmith</p>
                </div>
                <Button size="sm" variant="outline">
                  Follow
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Following</h2>
              <Link className="text-primary hover:underline" href="#">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">Jane Doe</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">@janedoe</p>
                </div>
                <Button size="sm" variant="outline">
                  Unfollow
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">John Smith</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">@johnsmith</p>
                </div>
                <Button size="sm" variant="outline">
                  Unfollow
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">Sarah Johnson</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">@sarahjohnson</p>
                </div>
                <Button size="sm" variant="outline">
                  Unfollow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}