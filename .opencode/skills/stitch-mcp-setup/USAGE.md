# Stitch MCP Setup & Troubleshooting Skill - Usage Guide

## When to Use This Skill

Activate this skill when you encounter:
- "StitchProxy requires an API key" errors
- Environment variables not persisting
- Proxy connection failures
- Port conflicts
- General Stitch MCP setup issues

## Activation Commands

### Direct Activation
```
Use the stitch-mcp-setup skill to handle proxy setup and troubleshooting
```

### Automatic Triggers
The skill will automatically activate when it detects:
- Failed Stitch proxy startup attempts
- Environment variable-related errors
- Connection issues to localhost proxy ports

## Common Scenarios

### Scenario 1: First-time Setup
**Problem**: Need to set up Stitch MCP for the first time
**Solution**: Skill will:
1. Detect your operating system
2. Guide you through API key configuration
3. Set up environment variables correctly
4. Start the proxy with proper session management
5. Verify the setup

### Scenario 2: Environment Variable Issues
**Problem**: Getting "StitchProxy requires an API key" despite setting the variable
**Solution**: Skill will:
1. Explain the session persistence issue
2. Show correct command chaining syntax
3. Demonstrate proper variable setting for your OS
4. Verify the fix

### Scenario 3: Proxy Connection Problems
**Problem**: Proxy starts but can't connect to tools
**Solution**: Skill will:
1. Check if proxy is actually running
2. Test network connectivity
3. Verify port availability
4. Check tool discovery process
5. Provide debugging steps

## Advanced Features

### Background Mode
```bash
# Run proxy in background (Unix-like systems)
export STITCH_API_KEY=your_key && npx -y @_davideast/stitch-mcp@latest proxy --port 8080 &
```

### Custom Port Configuration
```bash
# Use a different port to avoid conflicts
export STITCH_API_KEY=your_key && npx -y @_davideast/stitch-mcp@latest proxy --port 3001
```

### Debug Mode
```bash
# Enable debug logging for troubleshooting
export STITCH_API_KEY=your_key && npx -y @_davideast/stitch-mcp@latest proxy --port 8080 --debug
```

## Troubleshooting Tips

### Windows-Specific Issues
- **Problem**: `set VAR=value` doesn't persist
- **Solution**: Chain commands with `&&` in single session
- **Example**: `set VAR=value && command_using_var`

### Port Conflicts
- **Problem**: "Port already in use"
- **Solution**: Try different ports (8080, 3001, 3002, etc.)
- **Check**: `netstat -ano | findstr :port_number`

### API Key Issues
- **Problem**: Invalid or missing API key
- **Solution**: Verify key format and environment variable
- **Test**: `echo %STITCH_API_KEY%` (Windows) or `echo $STITCH_API_KEY` (Unix)

## Best Practices

1. **Always chain commands**: Set variables and use them in same session
2. **Use standard ports**: 8080, 3000-3001 for consistency
3. **Check health**: Verify proxy is running after startup
4. **Clean shutdown**: Properly terminate proxy when done
5. **Document setup**: Store configuration details in project memory

## Memory Storage

After using this skill, it will automatically store:
- Setup completion status
- Configuration used (port, debug settings)
- Any issues encountered and resolutions
- Timestamp of last successful setup