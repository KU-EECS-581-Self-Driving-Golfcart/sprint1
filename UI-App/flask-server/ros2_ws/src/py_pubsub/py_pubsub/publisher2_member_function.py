# Copyright 2016 Open Source Robotics Foundation, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from time import sleep

import rclpy

from std_msgs.msg import Bool



def main(args=None):
  rclpy.init(args=args)

  node = rclpy.create_node('Stop_Publisher')

  publisher = node.create_publisher(Bool, 'IsGO', 10)

  msg = Bool()
  send = True
  i = 0
  while rclpy.ok():
    msg.data = False
    i += 1
    #node.get_logger().info('Publishing: "%s"' % msg.data)
    if send:
        publisher.publish(msg)
        send= False
    sleep(0.5)  # seconds

# Destroy the node explicitly
# (optional - otherwise it will be done automatically
# when the garbage collector destroys the node object)
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
  main()