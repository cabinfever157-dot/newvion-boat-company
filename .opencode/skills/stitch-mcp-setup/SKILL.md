---
name: stitch-mcp-setup
description: Stitch MCP Setup & Troubleshooting - Handles Stitch Multi-Tool Control Protocol setup, environment configuration, and common issues on Windows systems.
---

# Stitch MCP Setup & Troubleshooting

## Description
Handles Stitch Multi-Tool Control Protocol setup, environment configuration, and common issues on Windows systems.

## Triggers
- "Stitch proxy not working"
- "Environment variable not persisting"
- "Stitch MCP setup"
- "Can't connect to Stitch tools"
- "Stitch proxy setup"
- "MCP proxy issues"

## Capabilities

### 1. Cross-platform Environment Setup
- Detects operating system (Windows vs Unix)
- Handles Windows `set` vs Unix `export` differences
- Manages environment variable persistence across sessions

### 2. Proxy Management
- Start/stop/restart Stitch proxy with proper error handling
- Automatic API key detection and configuration
- Port configuration and conflict resolution

### 3. Connection Testing
- Verify proxy health and tool availability
- Network connectivity checks
- Tool discovery verification

### 4. Background Service Management
- Run proxy as background process
- Process management and cleanup
- Session isolation techniques

### 5. Error Handling Patterns
- Environment variable not found
- Port already in use
- API connection failures
- Proxy startup failures

## Workflow

### Standard Setup Process
1. **Environment Detection**: Identify OS and shell environment
2. **API Key Validation**: Check for existing STITCH_API_KEY
3. **Variable Setup**: Set environment variable using appropriate method
4. **Proxy Startup**: Launch Stitch MCP proxy with configured port
5. **Health Check**: Verify proxy is running and tools are available

### Troubleshooting Process
1. **Issue Identification**: Determine specific failure point
2. **Root Cause Analysis**: Check environment, network, permissions
3. **Corrective Action**: Apply appropriate fix (variable setting, port change, etc.)
4. **Verification**: Confirm proxy is operational

## Technical Details

### Windows-Specific Considerations
- `set` command only persists for current session
- Environment variables must be set and used in same command session
- Use `&&` to chain commands in single session
- Background processes require different handling than Unix

### Common Error Patterns
1. **"StitchProxy requires an API key"**: Environment variable not properly set
2. **"Could not connect to server"**: Proxy not running or wrong port
3. **Variable not persisting**: Using `set` in separate sessions
4. **Port conflicts**: Another service using the configured port

## Implementation Examples

### Correct Windows Setup
```bash
export STITCH_API_KEY=your_api_key_here && npx -y @_davideast/stitch-mcp@latest proxy --port 8080
```

### Background Process (Unix)
```bash
export STITCH_API_KEY=your_api_key_here && npx -y @_davideast/stitch-mcp@latest proxy --port 8080 &
```

### Health Check
```bash
curl http://localhost:8080/health
```

## Best Practices

1. **Session Management**: Always set variables and run commands in same session
2. **Port Selection**: Use non-standard ports (8080, 3001, etc.) to avoid conflicts
3. **Error Handling**: Include proper error checking and fallback mechanisms
4. **Logging**: Enable debug logging during troubleshooting
5. **Cleanup**: Properly terminate proxy processes when done

## Tools Integration

When this skill is activated, it should:
1. Check current environment and OS
2. Verify Stitch MCP installation
3. Detect existing API key configuration
4. Provide setup options based on context
5. Handle the complete setup and verification process

## Memory Integration

After successful setup, store:
- Setup completion status (Project memory)
- Port configuration used (Project memory)
- Any troubleshooting steps taken (Project memory)
- API key configuration method (Global memory - abstract, not the key itself)