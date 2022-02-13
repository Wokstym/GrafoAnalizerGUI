export interface GraphDataResponse {
  nodes: TwitterUserNode[];
  edges: TwitterRetweetEdge[];
}

export interface TwitterUserNode {
  id: string;
  name: string;
  username: string;
  followers: number;
}

export interface TwitterRetweetEdge {
  fromUserId: string;
  toUserId: string;
  retweets: number;
}

export interface GetGraphSearchRequest {
  userNames: string[];
}
